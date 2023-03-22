# 实现instanceOf

## instanceof作用

检测构造函数的原型是否在实例的原型链上

## 原型链

![https://xiaodongsdy.cn/personalBlog/prototype.jpg](https://xiaodongsdy.cn/personalBlog/prototype.jpg)



## instanceOf实现

```js
/**
 * 检测构造函数的原型是否在实例的原型链上
 */
  function new_instance_of(leftVaule, rightVaule) {
    // 取右表达式的 prototype 值
      let rightProto = rightVaule.prototype; 
      // 取左表达式的__proto__值  
      leftVaule = leftVaule.__proto__; 

      while (true) {
        if (leftVaule === null) {
          return false;
        }
        if (leftVaule === rightProto) {
          // 如果原型对上返回true
          return true;
        }
        leftVaule = leftVaule.__proto__
      }
  }
```



测试，得到一致的结果：

```js
  class People { 
    name = '小东'
  }
  class Student extends People { }
  const vortesnail = new Student();

  console.log(vortesnail instanceof People); // true
  console.log(vortesnail instanceof Student); // true
  console.log(new_instance_of(vortesnail, People)); // true
```



美观写法的实现方案：

```js
function instance_of(L, R) {
  var O = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null)
      return false;
    if (O === L) 
      return true;
    L = L.__proto__;
  }
}
```

