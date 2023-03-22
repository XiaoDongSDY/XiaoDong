# initWatch函数

 **Vue.js v2.6.14**

```javascript
  // 在初始化watch的时候(initWatch)，会调用vm.$watch函数为watch中的属性绑定setter回调
  //（如果组件中没有该属性则不能成功监听，属性必须存在于props、data或computed中）
  // 如果watch中属性的值是一个函数，则默认为属性的setter回调函数，
  // 如果属性的值是一个数组，则遍历数组中的内容，分别为属性绑定回调，
  // 此外属性的值还可以是一个对象，此时，对象中的handler字段代表setter回调函数，
  // immediate代表是否立即先去执行里面的handler方法，deep代表是否深度监听
  // 这也是平常watch的多种写法，都会在底层做出分支校验
  // vm.$watch函数会直接使用Watcher构建观察者对象
  // watch中属性的值作为watcher.cb存在，在观察者update的时候，在watcher.run函数中执行
  function initWatch(vm, watch) {
    //遍历watch，为每一个属性创建侦听器
    for (var key in watch) {
      var handler = watch[key];
      //如果属性值是一个数组，则遍历数组，为属性创建多个侦听器
      //createWatcher函数中封装了vm.$watch，会在vm.$watch中创建侦听器
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        //为属性创建侦听器
        createWatcher(vm, key, handler);
      }
    }
  }
  //createWatcher函数中封装了vm.$watch，会在vm.$watch中创建侦听器
  function createWatcher(
    vm,
    expOrFn,
    handler,
    options
  ) {
    //如果属性值是一个对象，则取对象的handler属性作为回调
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    //如果属性值是一个字符串，则从组件实例上寻找
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    //为属性创建侦听器
    return vm.$watch(expOrFn, handler, options)
  }
```
