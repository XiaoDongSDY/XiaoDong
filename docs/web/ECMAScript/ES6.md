# ES6

## ECMAScript 2015(ES6)

### let和const

```js
let 声明的范围是函数作用域，let 和 const 声明的范围是块作用域
let 声明的变量会被提升到函数作用域的顶部，
let 和 const 声明的变量不存在提升，且具有暂时性死区特征
let 允许在同一个作用域中重复声明同一个变量，let 和 const 不允许
在全局作用域中使用 let 声明的变量会成为 window 对象的属性，
let 和 const 声明的变量则不会
const 的行为与 let 基本相同，唯一 一个重要的区别是，
使用 const 声明的变量必须进行初始化，且不能被修改


​ 1.作用域
​ let没有块级作用域，而let声明的范围是块作用域; 
一对大括号 就是 一个块级作用域
if (true) {
    let message = "hello";
    console.log(message); // hello
}
console.log(message); // hello
if (true) {
    let message = "hello";
    console.log(message); // hello
}
console.log(message); // error: message is not defined




​ let 不允许同一个块作用域中出现冗余声明：
if (true) { 
    // error: 无法重新声明块范围变量“a”
    let a;
    let a;
}



​ JS 引擎会记录用于变量声明的标识符及其所在的块作用域，
因此嵌套使用相同的标识符不会报错，这是因为同一个块中没有重复声明：
let a = 666;
console.log(a); // 666
if (true) {
    let a = '小东';
    console.log(a); // 小东
}

​ let和let声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在，
所以对声明冗余报错不会因混用let和let而受影响：
// error
let a;
let a;

// error
let b;
let b;


​ 变量提升
//用let命名的变量有变量提升
console.log(num1);  // undefined
let num1 = 10;
// 以上代码运行时,相当于下面的写法

let num2;  // 声明提升到作用域最顶端
console.log(num2);  // undefined
num = 10;
/*****************************************/
//用 let 或 const 命名的变量有变量提升
console.log(num3); // Uncaught ReferenceError: num3 is not defined
let num3 = 10;      

console.log(num4); // Uncaught ReferenceError: num4 is not defined
const num4 = 10;

​ 暂时性死区
只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，
只有等到声明变量的那一行代码出现，才可以获取和使用该变量
let tmp = 123; // 声明
if (true) {
  tmp = 'abc'; // 报错 因为本区域有tmp声明变量
  let tmp; // 绑定if这个块级的作用域 不能出现tmp变量
}
暂时性死区和不能变量提升的意义在于: 为了减少运行时错误，
防止在变量声明前就使用这个变量，从而导致意料之外的行为。




​ 重复声明同名变量 和 重新赋值
//let 关键字可以声明同名变量,实际第二次声明是对第一次声明的变量重新赋值
let num1 = 10;
let num1 = 20;
console.log(num1);  // 20

//let 和const 关键字不能重复声明同名变量,即使之前是用let声明的也会报错
let num2 = 10;
let num2 = 20;  // Uncaught SyntaxError: Identifier 'num2' has already been declared 

//let 和 let 在声明变量时,可以不用初始化
let num3;  
console.log(num3);  // undefined
let num4;  
console.log(num4);  // undefined

//const 声明常量时必须初始化,因为 `const` 关键字声明的是常量,声明后不能再赋值
const num5;  // Uncaught SyntaxError: Missing initializer in const declaration

//let 声明的变量可以重新赋值
let num1 = 10;
num1 = 20;
console.log(num1);  // 20
//const 只能在声明时赋值，之后不能再重新赋值
const num2 = 10;
num2 = 20;  // Uncaught TypeError: Assignment to constant variable.



​ 全局声明
使用let在全局作用域中声明的变量会成为window对象的属性，let和const声明的变量则不会：
let a = 666;
console.log(window.a); // 666
 
let b = 666;
console.log(window.b); // undefined
 
const c = 666;
console.log(window.c); // undefined


​ for 循环中的let 和 let 声明的区别

for (let i = 0; i < 5; i++) {
    setTimeout( () => {
        console.log(i); // 5、5、5、5、5
    }, 0 )
}
 
for (let i = 0; i < 5; i++) {
    setTimeout( () => {
        console.log(i); // 0、1、2、3、4
    }, 0 )
}


// let是因为在退出循环时，迭代变量保存的是导致循环退出的值，也就是 5。
// 在之后异步执行超时逻辑时，所有的i都是同一个变量，因此输出的都是同一个最终值。
// 而在使用let声明迭代变量时，JS 引擎在后台会为每个迭代循环声明一个新的迭代变量，
// 每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，
// 也就是循环执行过程中每个迭代变量的值。

```

### 类（class）

```js
// 创建一个class类
class myClass1{
 //构造器，默认为空的构造器
 //当class在被new时就会调用构造器
 //相当于function
 //function myClass1(name,age){
 // this.name=name
 // this.age=age
 //}
 constructor(name,age){
  //这些都是实例属性
  //只有实例才能访问
  this.name=name
  this.age=age
 }
}

// 创建类实例对象
let xiaodong = new myClass('小东'，20)


// 创建静态属性
class myClass2{
 static info="这是myClass2的静态属性"
}
静态属性的使用
静态属性只有类才能访问，不能通过实例进行访问

console.log(myClass.info)
//i.info访问不到

// function中的静态属性
//直接在外部挂载给构造函数就是给function定义静态属性
function myFunction(){}
myFunction.info="这是function的静态属性"
//使用
console.log(myFunction.info) //这是function的静态属性



// ----------------------------ES5和ES6的实例方法----------------------------


class中的实例方法
class myClass3{
 //只有new出来的实例才能访问
 //类无法访问
 aFunction(){
  console.log('这是myClass3的实例方法')
 }
}
let xd =new myClass3()
xd.aFunction()


function myFunction(){}
myFunction.prototype.aFunction=function(){
 console.log('这是function中的实例方法')
}
//使用
let a=new myFunction()
a.aFunction()




// class中的静态方法
class myClass{
 //只有类才能访问
 //实例无法访问
 static staticFunction(){
  console.log('这是myClass的静态方法')
 }
}
myClass.staticFunction()


// function中的静态方法
function myFunction(){}
myFunction.staticFunction=function(){
 console.log('这是function中的静态方法')
}
//使用
myFunction.staticFunction()

// 在class内部只能写构造函数，静态属性，静态方法，实例方法
// class的静态方法和静态属性都挂载到constructor上，实例属性和方法都挂载到了实例对象上
// 就是把function封装成了class，class的本质还是function，使用起来更加方便

// class中的继承 extends
class father{
 constructor(name,age){
  this.nane=name
  this.age=age
 }
 holle(){
  console.log('holle')
 }
}
class son extends father{
}

// 继承之后，如果子类中没有定义，就会沿用父类中的方法或属性
// 子类对父类的方法和属性可以进行重构和重载
// 但是，如果是继承的父类中有定义构造函数
// // 就必须加一个super()
// 然后接着添加子类的构造方法，不能将父类中的构造函数覆盖
// super()是对父类构造器的一个引用，相当于父类中的constructor()方法直接写入到了子类中
```

### 模块化(ES Module)

```js
// 常用的模块化方式有 commonJS 规范、AMD 规范、CMD 规范以及 ES Module规范。
// export关键字将一个模块中的变量、函数、类等导出

ES Module 和 CommonJS 的模块化有一些不同之处：
    一方面它使用了 import 和 export 关键字；
    另一方面它采用了编译期静态类型检测，并且动态引用的方式；
    
ES Module 模块采用 export 和 import 来实现模块化：
 export 负责将模块内的内容导出；
    import 负责从其他模块导入内容；
    
// 采用 ES Module 将自动采用严格模式：use strict
    
    
 // 在语句声明的前面直接加上export关键字
    export const name = 'coderwhy';
    export const age = 18;
    export let message = "my name is why";
    export function sayHello(name) {
      console.log("Hello " + name);
    }

    
 // 将所有需要导出的标识符，放到export后面的 {}中
    const name = '小东';
    const age = 18;
    let message = "小东您好";
    function sayHello(name) {
      console.log("Hello " + name);
    }
    export {
      name,
      age,
      message,
      sayHello
    }

    
 // 导出时给标识符起一个别名
    export {
      name as fName,
      age as fAge,
      message as fMessage,
      sayHello as fSayHello
    }
    
 // import {标识符列表} from '模块'；
    import { name, age, message, sayHello } from './modules/foo.js';
    console.log(name)
    console.log(message);
    console.log(age);
    sayHello("小东");


// 导入时给标识符起别名
    import { 
        name as wName, 
        age as wAge, 
        message as wMessage, 
        sayHello as wSayHello 
    } from './modules/foo.js';


// 将模块功能放到一个模块功能对象（a module object）上
    import * as foo from './modules/foo.js';
    console.log(foo.name);
    console.log(foo.message);
    console.log(foo.age);
    foo.sayHello("小东");


// 为什么要这样做呢？
在开发和封装一个功能库时，通常我们希望将暴露的所有接口放到一个文件中；
这样方便指定统一的接口规范，也方便阅读；
这个时候，我们就可以使用 export 和 import 结合使用；


default用法
前面我们学习的导出功能都是有名字的导出（named exports）：
在导出export时指定了名字；
在导入import时需要知道具体的名字；
还有一种导出叫做默认导出（default export）
默认导出export时可以不需要指定名字；
在导入时不需要使用 {}，并且可以自己来指定名字；
它也方便我们和现有的CommonJS等规范相互操作
export default function sub(num1, num2) {
  return num1 - num2;
}

import sub from './modules/foo.js';
console.log(sub(20, 30));

//注意：在一个模块中，只能有一个默认导出（default export）；

// 通过import加载一个模块，是不可以在其放到逻辑代码中的
if (true) {
  import sub from './modules/foo.js'; //错误！！
}

为什么会出现这个情况呢？
这是因为ES Module在被JS引擎解析时，就必须知道它的依赖关系；
由于这个时候js代码没有任何的运行，所以无法在进行类似于if判断中根据代码的执行情况； 
甚至下面的这种写法也是错误的：因为我们必须到运行时能确定path的值；
const path = './modules/foo.js';
import sub from path;  //错误！！



// 但是某些情况下，我们确确实实希望动态的来加载某一个模块：
// 如果根据不懂的条件，动态来选择加载模块的路径；
// 这个时候我们需要使用 import() 函数来动态加载；

// aaa.js 模块：
export function aaa() {
  console.log("小东");
}

// bbb.js 模块：
export function bbb() {
  console.log("bbb被执行");
}

// main.js 模块：
let flag = true;
if (flag) {
  import('./modules/aaa.js').then(aaa => {
    aaa.aaa();
  })
} else {
  import('./modules/bbb.js').then(bbb => {
    bbb.bbb();
  })
}
```

### 箭头（Arrow）函数

```js
// 普通函数
let sum = function(a, b) {
 return a + b;
}

// 箭头函数
let sum1 = (a, b) => {
 return a + b;
}


// 有效
let sum = (x) => {
 return x;
};
// 有效
let sum1 = x => {
 return x;
};
// 没有参数需要括号
let sum2 = () => {
 return 1;
};
// 有多个参数需要括号
let sum3 = (a, b) => {
 return a + b;
};

```

### 函数参数默认值

```js
// 这是以前我们的写法
function haosy(name,age){
    name= name ||'小东';
    age= age || 21;
    alert('你好',name,'年龄'，age);
}

//ES6
function haosy(name='小东',age=21){
    console.log('你好',name,'年龄'，age);
}
```

### 模板字符串

```js
// 反撇号（`）
const str  = `https://www.xiaodongsdy.cn/${xiaodong}`

`
<div> 
 你好小东 
</div>
`
```

### 解构赋值

```js
// 对象解构
  let obj1 = {
    name: { name1: '小东'},
    age: 20
  }
  let obj2 = {
    name: '苏轼',
    age: 28
  }
  let arr = new Array()
  arr.push(obj1, obj2)
  console.log(arr)
  let { name: { name1: xd } } = arr[0]
  let { name1: name1 } = arr[0].name
  console.log(xd)

  // 数组解构
  let arr = ["XiaoDong", "SuShi"]
  // firstName = arr[0]
  // surname = arr[1]
  let [firstName, surname] = arr;
  console.log(firstName); // XiaoDong
  console.log(surname);  // SuShi
```

### 延展操作符

```js
// 延展操作符…，从ES6开始添加的。可以在函数调用数组构造时, 
// 将数组表达式或者string在语法层面展开；
// 还可以在构造对象时, 将对象表达式按key-value的方式展开。

let iterableObj = [0, 1, 2, 3];
[...iterableObj, '4',5,'6'];


function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

//不使用延展操作符
console.log(sum.apply(null, numbers));// 6

//使用延展操作符
console.log(sum(...numbers));// 6


// ES2015引入了Rest参数和扩展运算符。三个点（…）仅用于数组。
// Rest参数语法允许我们将一个不定数量的参数表示为一个数组。
function restParam(p1, p2, ...p3) {
  console.log(p1);  
  // p1 = 1
  console.log(p2);
  // p2 = 2
  console.log(p3);
  // p3 = [3, 4, 5]
}
restParam(1, 2, 3, 4, 5);


// 展开操作符以相反的方式工作，将数组转换成可传递给函数的单独参数。
// 例如Math.max()返回给定数字中的最大值：
max(...values: number[]): number;
const values = [99, 100, -1, 48, 16];
console.log( Math.max(...values) ); // 


//  展开语法和 Object.assign() 行为一致, 执行的都是浅拷贝(只遍历一层)。
let arr = [1, 2, 3];
let arr2 = [...arr]; // 等同于 arr.slice()
arr2.push(4); 
console.log(arr2)//[1, 2, 3, 4]
 

在React中的应用
通常我们在封装一个组件时，会对外公开一些 props 用于实现功能。
大部分情况下在外部使用都应显示的传递 props 。但是当传递大量的props时，
会非常繁琐，这时我们可以使用 …(延展操作符,用于取出参数对象的所有可遍历属性) 来进行传递。

// 一般情况下我们应该这样写
<CustomComponent name ='小东' age ={21} />
    
// 使用 … 等同于上面的写法 
const params = {
 name: '小东',
 age: 20
}
<CustomComponent {...params} />

// 配合解构赋值避免传入一些不需要的参数
let params = {
 name: '123',
 title: '456',
 type: 'aaa'
}
let { type, ...other } = params;
<CustomComponent type='normal' number={2} {...other} />
//等同于
<CustomComponent type='normal' number={2} name='123' title='456' />

```

### 对象属性简写

### Promise

```js
// Promise 是异步编程的一种解决方案，其实是一个构造函数，
// 自己身上有all、reject、resolve这几个方法，原型上有then、catch等方法 

// Promise对象有以下两个特点。
（1）对象的状态不受外界影响。Promise对象代表一个异步操作，
有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，
只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，
状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。
如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。


// 下面先 new一个Promise
let p = new Promise(function(resolve, reject){
  //做一些异步操作
  setTimeout(function(){
   console.log('执行完成Promise');
   resolve('要返回的数据可以任何数据例如接口返回数据');
  }, 2000);
});
// 刷新页面会发现控制台直接打出 执行完成Promise
// 其执行过程是：
// 执行了一个异步操作，也就是setTimeout，2秒后，输出“执行完成”，并且调用resolve方法。
// 注意！我只是new了一个对象，并没有调用它，我们传进去的函数就已经执行了，
// 这是需要注意的一个细节。所以我们用Promise的时候一般
// 是包在一个函数中，在需要的时候去运行这个函数，如：
<div onClick={promiseClick}>开始异步请求</div>
  // 刷新页面的时候是没有任何反映的，但是点击后控制台打出
const promiseClick =()=>{
  console.log('点击方法被调用')
  let p = new Promise(function(resolve, reject){
  //做一些异步操作
  setTimeout(function(){
   console.log('执行完成Promise');
           resolve('要返回的数据可以任何数据例如接口返回数据');
  }, 2000);
 });
 return p
}

```
