# 响应式系统流程



![image-20230111094801227](https://xiaodongsdy.cn/personalBlog/vue2Reactivity)



附：[原图地址](https://xiaodongsdy.cn/personalBlog/vue2Reactivity)



### **index.js**

```js
import observe from './observe.js';
import Watcher from './Watcher.js';

var obj = {
    a: {
        m: {
            n: 5
        }
    },
    b: 10,
    c: {
        d: {
            e: {
                f: 6666
            }
        }
    },
    g: [22, 33, 44, 55]
};

observe(obj);
new Watcher(obj, 'a.m.n', (val) => {
    console.log('★我是watcher，我在监控a.m.n', val);
});
obj.a.m.n = 88;
// obj.g.push(66);
console.log(obj);
```



### **observe.js**

```js
import Observer from './Observer.js';
export default function (value) {
    // 如果value不是对象，什么都不做
    if (typeof value != 'object') return;
    // 定义ob
    var ob;
    if (typeof value.__ob__ !== 'undefined') {
        ob = value.__ob__;
    } else {
        ob = new Observer(value);
    }
    return ob;
}
```



### **Observer.js**

```js
import { def } from './utils.js';
import defineReactive from './defineReactive.js';
import { arrayMethods } from './array.js';
import observe from './observe.js';
import Dep from './Dep.js';

export default class Observer {
    constructor(value) {
        // 每一个Observer的实例身上，都有一个dep
        this.dep = new Dep();
        // 给实例（this，一定要注意，构造函数中的this不是表示类本身，而是表示实例）
        // 添加了__ob__属性，值是这次new的实例
        def(value, '__ob__', this, false);
        // console.log('我是Observer构造器', value);
        // 不要忘记初心，Observer类的目的是：
        // 将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的）的object
        // 检查它是数组还是对象
        if (Array.isArray(value)) {
            // 如果是数组，要非常强行的蛮干：将这个数组的原型，指向arrayMethods
            Object.setPrototypeOf(value, arrayMethods);
            // 让这个数组变的observe
            this.observeArray(value);
        } else {
            this.walk(value);
        }
    }
    // 遍历
    walk(value) {
        for (let k in value) {
            defineReactive(value, k);
        }
    }
    // 数组的特殊遍历
    observeArray(arr) {
        for (let i = 0, l = arr.length; i < l; i++) {
            // 逐项进行observe
            observe(arr[i]);
        }
    }
};
```



### **Dep.js**

```js
var uid = 0;
export default class Dep {
    constructor() {
        console.log('我是DEP类的构造器');
        this.id = uid++;

        // 用数组存储自己的订阅者。subs是英语subscribes订阅者的意思。
        // 这个数组里面放的是Watcher的实例
        this.subs = [];
    }
    // 添加订阅
    addSub(sub) {
        this.subs.push(sub);
    }
    // 添加依赖
    depend() {
        // Dep.target就是一个我们自己指定的全局的位置，你用window.target也行，
        // 只要是全剧唯一，没有歧义就行
        if (Dep.target) {
            this.addSub(Dep.target);
        }
    }
    // 通知更新
    notify() {
        console.log('我是notify');
        // 浅克隆一份
        const subs = this.subs.slice();
        // 遍历
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
};
```



### array.js

```js
import { def } from './utils.js';

// 得到Array.prototype
const arrayPrototype = Array.prototype;

// 以Array.prototype为原型创建arrayMethods对象，并暴露
export const arrayMethods = Object.create(arrayPrototype);

// 要被改写的7个数组方法
const methodsNeedChange = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];

methodsNeedChange.forEach(methodName => {
    // 备份原来的方法，因为push、pop等7个函数的功能不能被剥夺
    const original = arrayPrototype[methodName];
    // 定义新的方法
    def(arrayMethods, methodName, function () {
        // 恢复原来的功能
        const result = original.apply(this, arguments);
        // 把类数组对象变为数组
        const args = [...arguments];
        // 把这个数组身上的__ob__取出来，__ob__已经被添加了，为什么已经被添加了？
        // 因为数组肯定不是最高层，比如obj.g属性是数组，obj不能是数组，
        // 第一次遍历obj这个对象的第一层的时候，已经给g属性（就是这个数组）添加了__ob__属性。
        const ob = this.__ob__;

        // 有三种方法push\unshift\splice能够插入新项，现在要把插入的新项也要变为observe的
        let inserted = [];

        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                // splice格式是splice(下标, 数量, 插入的新项)
                inserted = args.slice(2);
                break;
        }

        // 判断有没有要插入的新项，让新项也变为响应的
        if (inserted) {
            ob.observeArray(inserted);
        }

        console.log('小东');

        ob.dep.notify();

        return result;
    }, false);
});
```



### **defineReactive.js**

```js
import observe from './observe.js';
import Dep from './Dep.js';

export default function defineReactive(data, key, val) {
    const dep = new Dep();
    // console.log('我是defineReactive', key);
    if (arguments.length == 2) {
        val = data[key];
    }

    // 子元素要进行observe，至此形成了递归。这个递归不是函数自己调用自己，而是多个函数、类循环调用
    let childOb = observe(val);

    Object.defineProperty(data, key, {
        // 可枚举
        enumerable: true,
        // 可以被配置，比如可以被delete
        configurable: true,
        // getter
        get() {
            console.log('你试图访问' + key + '属性');
            // 如果现在处于依赖收集阶段
            if (Dep.target) {
                dep.depend();
                if (childOb) {
                    childOb.dep.depend();
                }
            }
            return val;
        },
        // setter
        set(newValue) {
            console.log('你试图改变' + key + '属性', newValue);
            if (val === newValue) {
                return;
            }
            val = newValue;
            // 当设置了新值，这个新值也要被observe
            childOb = observe(newValue);
            // 发布订阅模式，通知dep
            dep.notify();
        }
    });
};
```





### **utils.js**

```js
export const def = function (obj, key, value, enumerable) {
    Object.defineProperty(obj, key, {
        value,
        enumerable,
        writable: true,
        configurable: true
    });
};
```



### **Watcher.js**

```js
import Dep from "./Dep";

var uid = 0;
export default class Watcher {
    constructor(target, expression, callback) {
        console.log('我是Watcher类的构造器');
        this.id = uid++;
        this.target = target;
        this.getter = parsePath(expression);
        this.callback = callback;
        this.value = this.get();
    }
    update() {
        this.run();
    }
    get() {
        // 进入依赖收集阶段。让全局的Dep.target设置为Watcher本身，那么就是进入依赖收集阶段
        Dep.target = this;
        const obj = this.target;
        var value;

        // 只要能找，就一直找
        try {
            value = this.getter(obj);
        } finally {
            Dep.target = null;
        }

        return value;
    }
    run() {
        this.getAndInvoke(this.callback);
    }
    getAndInvoke(cb) {
        const value = this.get();

        if (value !== this.value || typeof value == 'object') {
            const oldValue = this.value;
            this.value = value;
            cb.call(this.target, value, oldValue);
        }
    }
};

function parsePath(str) {
    var segments = str.split('.');

    return (obj) => {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return;
            obj = obj[segments[i]]
        }
        return obj;
    };
}
```





附：[源码下载](https://xiaodongsdy.cn/personalBlog/study-reactive.zip)
