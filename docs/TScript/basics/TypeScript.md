# TypeScript 常用类型

TypeScript 是 JS 的超集，TS 提供了 JS 的所有功能，并且额外的增加了：**类型系统**

**JS 有类型**（比如，number/string 等），但是 **JS 不会检查变量的类型是否发生变化**，而 TS 会检查

TypeScript 类型系统的主要优势：**可以显示标记出代码中的意外行为，从而降低了发生错误的可能性**

## 类型注解

示例代码

```ts
let age: number = 18;
```

> 说明：代码中`:number`就是类型注解

**类型注解约束了只能给该变量赋值该类型的值**

错误演示

```ts
// 错误原因：将 string 类型的值赋值给了 number 类型的变量，类型不一致
let age: number = '18';
```

## 常用基础类型

可以将 TS 中的常用基础类型分为两类

1. JavaScript 已有类型

- 原始类型： **`number/string/boolean/null/undefined/symbol`**
- 对象类型：**`object`**(数组、对象、函数等)

1. TypeScript 新增类型

- 联合类型、自定义类型（类型别名）、接口、元祖、字面量类型、枚举、void、any 等

> 注意：原始类型在 TS 和 JS 中写法一致， 对象类型在 TS 中更加细化，每个具体对象都有自己的类型语法

### 原始类型

**`number/string/boolean/null/undefined/symbol`**

> 特点：可完全按照 JavaScript 中的名称来书写

```ts
let age: number = 18;
let username: string = '张三';
let isMerry: boolean = false;
let unique: Symbol = Symbol('shuiruohanyu');
```

### 数组类型

数组两种写法

1. `类型[]`写法， 如

```ts
let userList: string[] = ['John', 'Bob', 'Tony'];
let peopleList: object[] = [{ name: '小东', age: 18 }];
```

1. Array<类型>写法， 如

```ts
let user2List: Array<string> = ['John', 'Bob', 'Tony'];
let people2List: Array<object> = [{ name: '小东', age: 18 }];
```

### 联合类型

> 组中既有 number 类型，又有 string 类型，这个数组的类型应该如何写?

可以用`|`(竖线)分割多个类型， 如

```ts
let str: string | number = 1;
str = '小东';
```

如果数组中可以是字符串或者数字，则可以这么写

```ts
let arr: Array<number | string> = [1, 2, '小东'];//推荐
let arr2: (string | number)[] = [1, 2, '小东']; 
```

### 类型别名

> 当一个复杂类型或者联合类型过多或者被频繁使用时，可以通过类型别名来简化该类型的使用

用法：`type` 名称 = 具体类型

```ts
type CustomArray = Array<number | string>;
let arr1: CustomArray = [1, 2, '小东'];
```

以上代码中，`type`作为创建自定义类型的关键字

- 类型别名可以使任意合法的变量名称
- 推荐大驼峰的命名写法

### 函数类型

> 除了变量，我们常见的类型指定还有针对函数的类型声明

函数类型需要指的是 `函数参数`和`返回值`的类型，这里分为两种写法

- 第一种： 单独指定参数，返回值类型

```ts
// 单独指定函数返回值和函数参数
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// 指定变量形式的
const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};
```

- 第二种， 同时指定参数和返回值

```ts
// 同时指定参数和返回值
type CustomFunc = (num1: number, num2: number) => number;
const add3: CustomFunc = (num1, num2) => {  return num1 + num2;};
```

注意： 当函数作为表达式时，可以通过类似箭头函数形式的语法来为函数添加类型，这种形式`只适用于函数表达式`

#### void 类型

当我们的函数定义为没有返回值的类型时，可用关键字`void`表示

```ts
// 没有返回值的函数
type CustomFunc1 = (num1: string, num2: number) => void;
const combinStr: CustomFunc1 = () => {};
```

如果一个函数没有返回值，此时，在 TS 的类型中，应该使用 `void` 类型

```ts
const add4 = () => {};// 如果什么都不写 表示add4函数的类型为void
const add5 = (): void => {};// 这种写法明确指定返回值为void与上方的类型相同
const add6 = (): undefined => {  return undefined;};// 如果指定返回值为undefined  return undefined
```

#### 函数可选参数

当我们定义函数时，有的参数可传可不传，这种情况下，可以使用 TS 的可选参数来指定类型

比如，在使用数组的`slice`方法时，我们可以直接使用`slice()` 也可以传入参数 `slice(1)` 也可以`slice(1,3)`

```ts
const slice = (start?: number, end?: number): void => {};
```

`?` 表示该参数或者变量可传可不传

注意：**可选参数只能出现在参数列表的最后**， 即必须参数必须在可选参数之前

### 对象类型

JS 中的对象是由属性和方法组成的，TS 的对象类型是**对象中属性和方法的描述**

写法

```ts
// 如果有多个属性 可以换行 去掉间隔符号
let person3: {  name: string;  sayHello: Function;} = {  name: '小东',  sayHello() {},};
```

总结： 可是使用`{}`来描述对象结构

属性采用`属性名：类型`形式

函数可以采用 `方法名(): 返回值类型` 或者 `函数名: Function`（不指定返回值）的形式

#### 使用类型别名

直接使用`{}`会降低代码可读性，不具有辨识度，更推荐使用类型别名添加对象类型

```ts
type PersonObj = {  name: string;  sayHello(): string;};
const p1: PersonObj = {  name: '小东',  sayHello() {    return this.name;  },};
```

#### 带有参数的方法的类型

如果对象中的函数带有参数，可以在函数中指定参数类型

```ts
// 带参数的函数方法
type PersonObj2 = {  name: string;  sayHello(start: number): string;};
const p2: PersonObj2 = {  name: '小东',  sayHello(start) {    return this.name;  },};
```

#### 箭头函数形式的方法类型

```ts
// 箭头函数形式定义类型
type People = {
  sayHello: (start: number) => string;
};
const p3: People = {
  sayHello() {
    return '';
  },
};
```

#### 对象可选属性

对象中的若干属性，有时也是可选的，此时我们依然可以使用`?`来表示

```ts
type Config = {  method?: string;  url: string;};
const func = (config: Config) => {};func({ url: '/a' });
```

### 接口 interface

当一个对象类型被多次使用时，一般使用接口（interface）描述对象的类型，达到复用的目的

- 我们使用`interface`关键字来声明接口
- 接口名称推荐以`I`为开头
- 声明接口之后，直接使用接口名称作为变量的类型

> 接口后不需要分号

```ts
// 接口
interface IPeople {  name: string;  age: number;  sayHello(): void;}
let p: IPeople = {  name: '小东',  age: 18,  sayHello() {},};
```

#### 接口和自定义类型的区别

相同点：都可以给对象指定类型

不同点： 接口只能为对象指定类型， 自定义类型可以为任意类型指定类型

- 推荐用 type 来定义

#### 接口继承

- 如果两个接口之间有相同的属性和方法，可以讲**公共的属性和方法抽离出来，通过继承来实现复用**

比如，这两个接口都有 x、y 两个属性，重复写两次，可以，但很繁琐

```ts
interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}
```

- 更好的方式

```ts
interface Point2D { x: number; y: number }
interface Point3D extends {
    z: number
}
```

我们使用`extends`关键字实现了 Point3D 继承了 Point2D 的所有属性的定义， 同时拥有继承的属性和自身自定义的属性

### 元组

当我们想定义一个数组中具体索引位置的类型时，可以使用元祖。

> 原有的数组模式只能宽泛的定义数组中的普遍类型，无法精确到位置

元组是另一种类型的数组，它确切知道包含多少个元素，以及特定索引对应的类型

```ts
let position: [number, number] = [39.5427, 116.2317];
```

### 类型推论

在 TS 中，某些没有明确指出类型的地方，**TS 的类型推论机制会帮助提供类型**

也就是说，由于类型推论的存在，在某些地址类型注解可以省略不写。

- 发生类型推论的常见场景

1. 声明变量并初始化时
2. 决定函数返回值时

```ts
// 变量creater_name自动被推断为 stringlet creater_name = 'gaoly';
// 函数返回值的类型被自动推断为 numberfunction addCount(num1: number, num2: number) {  return num1 + num2;}
```

推荐：**能省略类型注解的地方就省略**（~~偷懒~~，充分利用 TS 类型推论的能力，提升开发效率）

技巧：如果不知道类型，可以通过鼠标放在变量名称上，利用 VSCode 的提示来查看类型

### 字面量类型

> 下面的代码类型分别是什么？

```ts
// 字面量类型
let str1 = '张三';const str2 = '小东';
```

通过 TS 的类型推导可以得到答案

1.变量 str1 的变量类型为： string

2.变量 str2 的变量类型为 '张三'

解释：str1 是一个变量(let)，它的值可以是任意字符串，所以类型为:string

str2 是一个常量(const)，它的值不能变化只能是 '张三'，所以，它的类型为:'张三'

此时，‘张三’就是一个**字面量类型**，即某个特殊的字符串也可以作为 TS 中的类型

任意的 JS 字面量（对象，数组，数字）都可以作为类型使用

#### 使用场景和模式

- 使用模式：**字面量类型配合联合类型一起使用**
- 使用场景：用来表示一组明确的可选值列表
- 比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上、下、左、右中的任意一个

```ts
type Direction = 'left' | 'right' | 'up' | 'down';
// 使用自定义类型:
function changeDirection(direction: Direction) {  console.log(direction);}
// 调用函数时，会有类型提示：changeDirection('up');
```

- 解释：参数 direction 的值只能是 up/down/left/right 中的任意一个
- 优势：相比于 string 类型，使用字面量类型更加精确、严谨

### 枚举

- 枚举的功能类似于**字面量类型+联合类型组合**的功能，也可以表示一组明确的可选值
- 枚举：定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个

```ts
// 枚举
// 创建枚举enum Direction2 {  Up,  Down,  Left,  Right,}
// 使用枚举类型function changeDirection2(direction: Direction2) {  console.log(direction);}
// 调用函数时，需要应该传入：枚举 Direction 成员的任意一个// 类似于 JS 中的对象，直接通过 点（.）语法 访问枚举的成员changeDirection2(Direction2.Up);
```

#### 数字枚举

- 问题：我们把枚举成员作为了函数的实参，它的值是什么呢?
- 解释：通过将鼠标移入 Direction.Up，可以看到枚举成员 Up 的值为 0
- 注意：枚举成员是有值的，默认为：从 0 开始自增的数值
- 我们把，枚举成员的值为数字的枚举，称为：`数字枚举`
- 当然，也可以给枚举中的成员初始化值

```ts
// Down -> 11、Left -> 12、Right -> 13enum Direction {  Up = 10,  Down,  Left,  Right,}
enum Direction {  Up = 2,  Down = 4,  Left = 8,  Right = 16,}
```

#### 字符串枚举

- 字符串枚举：枚举成员的值是字符串
- 注意：字符串枚举没有自增长行为，因此，**字符串枚举的每个成员必须有初始值**

```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

#### 枚举实现原理

- 枚举是 TS 为数不多的非 JavaScript 类型级扩展(不仅仅是类型)的特性之一
- 因为：其他类型仅仅被当做类型，而枚举不仅用作类型，还提供值(枚举成员都是有值的)
- 也就是说，其他的类型会在编译为 JS 代码时自动移除。但是，**枚举类型会被编译为 JS 代码**

```ts
enum Direction {  Up = 'UP',  Down = 'DOWN',  Left = 'LEFT',  Right = 'RIGHT'}
// 会被编译为以下 JS 代码：var Direction;
(function (Direction) {  Direction['Up'] = 'UP'  Direction['Down'] = 'DOWN'  Direction['Left'] = 'LEFT'  Direction['Right'] = 'RIGHT'})(Direction || Direction = {})
```

- 说明：枚举与前面讲到的字面量类型+联合类型组合的功能类似，都用来表示一组明确的可选值列表
- 一般情况下，**推荐使用字面量类型+联合类型组合的方式**，因为相比枚举，这种方式更加直观、简洁、高效

### any 类型

- **原则:不推荐使用 any**!这会让 TypeScript 变为 “AnyScript”(失去 TS 类型保护的优势)
- 因为当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示

```ts
let obj: any = { x: 0 };
obj.bar = 100;obj();const n: number = obj;
```

- 解释:以上操作都不会有任何类型错误提示，即使可能存在错误
- 尽可能的避免使用 any 类型，除非临时使用 any 来“避免”书写很长、很复杂的类型
- 其他隐式具有 any 类型的情况
  1. 声明变量不提供类型也不提供默认值
  2. 函数参数不加类型
- 注意：因为不推荐使用 any，所以，这两种情况下都应该提供类型

在项目开发中，尽量少用 any 类型

------

### 类型断言

有时候你会比 TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。 比如，

```ts
const aLink = document.getElementById('link');
```

- 注意：该方法返回值的类型是 HTMLElement，该类型只包含所有标签公共的属性或方法，不包含 a 标签特有的 href 等属性
- 因此，这个**类型太宽泛(不具体)**，无法操作 href 等 a 标签特有的属性或方法
- 解决方式：这种情况下就需要**使用类型断言指定更加具体的类型**
- 使用类型断言：

```ts
const aLink = document.getElementById('link') as HTMLAnchorElement;
```

- 解释:
  1. 使用 `as` 关键字实现类型断言
  2. 关键字 as 后面的类型是一个更加具体的类型（HTMLAnchorElement 是 HTMLElement 的子类型）
  3. 通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了
- 另一种语法，使用 `<>` 语法，这种语法形式不常用知道即可:

```ts
// 该语法，知道即可：在react的jsx中使用会报错
const aLink = <HTMLAnchorElement>document.getElementById('link');
```

*技巧：在浏览器控制台，通过 `__proto__` 获取 DOM 元素的类型*

### typeof

- 众所周知，JS 中提供了 typeof 操作符，用来在 JS 中获取数据的类型

```js
console.log(typeof 'Hello world'); // ?string
```

- 实际上，TS 也提供了 typeof 操作符：可以在*类型**上下文***中引用变量或属性的类型（类型查询）
- 使用场景:根据已有变量的值，获取该值的类型，来简化类型书写

```ts

// js上下文中的typeof
console.log(typeof "小东")

let xiaodong = {
  name: "小东",
  age: 20
}

type CustomObje = {
  name: string,
  age: number
}

// 方法一
function getName1(e: CustomObje) {
  console.log(e)
}

// 方法二
function getName2(e: typeof xiaodong) {
  console.log(e)
}

// 将xiaodong的值通过typeof关键字推到除来后视为一个类型
// 注意此刻typeof为ts上下文环境
// 在使用typeof的时候需要考虑当前上下文环境
type CustomObje2 = typeof xiaodong
function getName3(e: CustomObje2) {
  console.log(e)
}

getName1(xiaodong)
getName2(xiaodong)
getName3(xiaodong)


```

- 解释:
  1. 使用 `typeof` 操作符来获取变量 p 的类型，结果与第一种（对象字面量形式的类型）相同
  2. typeof 出现在**类型注解的位置（参数名称的冒号后面）所处的环境就在类型上下文**(区别于 JS 代码)
  3. 注意：typeof 只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）

# TypeScript 高级类型

## TS 中的类型兼容性

两种类型系统：1 **Structural Type System(结构化类型系统)** 2 Nominal Type System(标明类型系统)

**TS 采用的是结构化类型系统，也叫做 duck typing(鸭子类型)，类型检查关注的是值所具有的形状**

也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。比如：

```ts
export { /* 类型兼容性 */ }

type xiaodong = {
  name: string;
  age: number;
}

type sushi = {
  name: string;
  age: number;
}

let xd: xiaodong = {
  name: '小东',
  age: 20
}

// 注意,当类型都一致时,解构一样,因为ts是解构化类型, 接口同理
// 当两者具备相同的类型时,可达到兼容的效果 ( 随意赋值 )
let person: sushi = xd




// 1.ts是解构化的类型系统
// 2.具有相同的解构，可以互相赋值
// 3.***对象***的兼容性，对象多的属性 => 可以赋值给对象少的属性
// 对于对象类型来说，y 的成员至少与 x 相同，则 x 兼容 y（成员多的可以赋值给少的，
// 或者说：只要满足必须的类型就行，多了也没事）

type xiaodong2 = {
  name: string;
  age: number;
  sex: string
}

type sushi2 = {
  name: string;
  age: number;
}

let xd2: xiaodong2 = {
  name: '小东',
  age: 20,
  sex: '男'
}

let person2: sushi2 = xd2


```

```ts
export { }
// 函数兼容性 是相反的
// 函数类型的类型兼容性比较复杂，需要考虑：1 参数个数 2 返回值类型 等等
// 参数个数：参数多的兼容参数少的(或者说，参数少的可以赋值给多的)
// 在 JS 中省略用不到的函数参数实际上是很常见的，这样的使用方式，促成了 TS 中函数类型之间的兼容性
const arr = ['a', 'b', 'c'];
// arr.forEach 第一个参数的类型为： (value: string, index: number, array: string[]) => void


// forEach方法中的function回调有三个参数：
// 第一个参数是遍历的数组内容，
// 第二个参数是对应的数组索引，
// 第三个参数是数组本身

arr.forEach(() => { });
arr.forEach((item) => { });
arr.forEach((item, index) => { });
arr.forEach((item, index, list) => { }); 

// ---

type F1 = (a: number) => void;
type F2 = (a: number, b: number) => void;

// 正确：参数少的可以赋值给参数多的
let f1: F1 = (a) => { };
let f2: F2 = f1;

// 返回值类型：只要满足必须的类型要求就行，多了也没事
// type F1 = () => void;
// const f1: F1 = () => {
//   return 123;
// };
```

## 泛型概述

- **泛型（Generics）可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用**，常用于：函数、接口、class 中
- 需求：创建一个 id 函数，传入什么数据就返回该数据本身（也就是说，参数和返回值类型相同）

```ts
// 比如，该函数传入什么数值，就返回什么数值
function id(value: number): number {
  return value;
}

// res => 10
const res = id(10);
```

- 比如，id(10) 调用以上函数就会直接返回 10 本身。但是，该函数只接收数值类型，无法用于其他类型
- 为了能让函数能够接受任意类型的参数，可以将参数类型修改为 any。但是，这样就失去了 TS 的类型保护，类型不安全

```ts
function id(value: any): any {
  return value;
}
```

- 这时候，就可以使用**泛型**来实现了
- **泛型在保证类型安全(不丢失类型信息)的同时，可以让函数等与多种不同的类型一起工作，灵活可复用**
- 实际上，在 C# 和 Java 等编程语言中，泛型都是用来实现可复用组件功能的主要工具之一

## 泛型函数

```ts
function id<Type>(value: Type): Type {
  return value;
}

// 也可以仅使用一个字母来作为类型变量的名称
function id<T>(value: T): T {
  return value;
}
```

- 语法：在函数名称的后面添加 `<>`（尖括号），**尖括号中添加类型变量**，比如此处的 Type
- **类型变量 Type，是一种特殊类型的变量，它处理类型而不是值**
- **类型变量相当于一个类型容器**，能够捕获用户提供的类型（具体是什么类型由用户调用该函数时指定）
- 因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型
- 类型变量 Type，可以是任意合法的变量名称

调用泛型函数：

```ts
// 函数参数和返回值类型都为：number
const num = id<number>(10);

// 函数参数和返回值类型都为：string
const str = id<string>('a');
```

解释：

- 语法：在函数名称的后面添加 `<>`（尖括号），**尖括号中指定具体的类型**，比如，此处的 number
- 当传入类型 number 后，这个类型就会被函数声明时指定的类型变量 Type 捕获到
- 此时，Type 的类型就是 number，所以，函数 id 参数和返回值的类型也都是 number
- 这样，通过泛型就做到了让 id 函数与多种不同的类型一起工作，**实现了复用的同时保证了类型安全**

## 简化泛型函数调用

在调用泛型函数时，**可以省略 `<类型>` 来简化泛型函数的调用**

02——6.泛型函数的写法.itcast
