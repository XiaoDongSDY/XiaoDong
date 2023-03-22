# initState函数



 **Vue.js v2.6.14**

```javascript
  //这个初始化解决了实例化是通过 this 获取 data props methods 内数据
  //  initState(vm) ，初始化状态(这个状态包含data props methods)

  // initState里面主要是对vue实例中的 props, methods, data, 
  // computed 和 watch 数据进行初始化。
  function initState(vm) {
    vm._watchers = []; //组件即_watchers实例
    var opts = vm.$options;
    // 在初始化props的时候(initProps)，
    // 会遍历props中的每个属性，然后进行类型验证，
    // 数据监测等（提供为props属性赋值就抛出警告的钩子函数）。
    if (opts.props) { initProps(vm, opts.props); }  // 初始化props

    // 在初始化methods的时候(initMethods)，主要是监测methods中的方法名是否合法。
    if (opts.methods) { initMethods(vm, opts.methods); } // 初始化methods

    // 在初始化data的时候(initData)，会运行 observe 函数深度遍历数据中的每一个属性，
    // 进行数据劫持。
    if (opts.data) {
      initData(vm); // 初始化data
    } else {
      // 通过 observe 函数观测一个空的对象，并且 vm._data 引用了该空对象。
      // 其中 observe 函数是将 data 转换成响应式数据的核心入口，也是响应式系统的核心人物
      observe(vm._data = {}, true /* asRootData */);
    }
    // 在初始化computed的时候(initComputed)，会监测数据是否已经存在data或props上，
    // 如果存在则抛出警告，否则调用defineComputed函数，监听数据，
    // 为组件中的属性绑定getter及setter。如果computed中属性的值是一个函数，
    // 则默认为属性的getter函数。此外属性的值还可以是一个对象，
    // 他只有三个有效字段set、get和cache，分别表示属性的setter、getter和是否启用缓存，
    // 其中get是必须的，cache默认为true。
    if (opts.computed) { initComputed(vm, opts.computed); } //初始化computed

    // 初始化watch的时候(initWatch)，会调用vm.$watch函数为watch中的属性绑定setter回调
    // （如果组件中没有该属性则不能成功监听，属性必须存在于props、data或computed中）。
    // 如果watch中属性的值是一个函数，则默认为属性的setter回调函数，
    // 如果属性的值是一个数组，
    // 则遍历数组中的内容，分别为属性绑定回调，此外属性的值还可以是一个对象，此时，
    // 对象中的handler字段代表setter回调函数，
    // immediate代表是否立即先去执行里面的handler方法，
    // deep代表是否深度监听。
    // vm.$watch函数会直接使用Watcher构建观察者对象。watch中属性的值作为watcher.cb存在，
    // 在观察者update的时候，在watcher.run函数中执行。
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);//初始化watch
    }
  }
```



**代码呈现图如下：**



![image-20230111094801227](https://xiaodongsdy.cn/personalBlog/vue2initState.png)



附：[源码图地址](https://xiaodongsdy.cn/personalBlog/vue2initState.png)
