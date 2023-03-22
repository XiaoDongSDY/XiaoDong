# 前端开发规范

## 引言

如果开发团队就一个人的话，那么自己写的代码就是规范，随着公司业务的扩展，团队不断壮大，这时候就要开始考虑协作和编码规范问题了。

```js
// 一个人走的更快，一群人可以走的更远，前提是统一的策略，还要不断地反省和优化。
```

**什么是规范？**

规范，名词意义上：即明文规定或约定俗成的标准，如：道德规范、技术规范等。动词意义上：是指按照既定标准、规范的要求进行操作，使某一行为或活动达到或超越规定的标准，如：规范管理、规范操作。

**为什么要有规范？**

- 降低新成员融入团队的成本, 同时也一定程度避免挖坑；
- 提高开发效率、团队协作效率, 降低沟通成本；
- 实现高度统一的代码风格，方便review, 另外一方面可以提高项目的可维护性；
- 规范是实现自动化的基础；
- 规范是一个团队知识沉淀的直接输出；

**规范包括哪些内容？**

如前面提到的，前端协作规范并不单单指‘编码规范’，这个规范涉及到前端开发活动的方方面面，例如代码库的管理、前后端协作、代码规范、兼容性规范；

不仅仅是前端团队内部需要协作，一个完整的软件生命周期内，我们需要和产品/设计、后端(或者原生客户端团队)、测试进行协作, 我们需要覆盖这些内容。

## 前端开发规范

主要从以下几个方面来概述前端的开发规范

- 目录构建规范
- 代码命名规范
- 开发文档的书写规范

## 目录构建规范

### 设计目的

是与项目开发的目录结构保持一致，便于项目的构建与管理。

### 资源分类

（1）源代码资源：指开发者编写的源代码，包括`html`、`css`、`template`等。

（2）内容资源：指希望作为内容提供给访问者的资源，包括图片、字体、`flash`、`pdf`等，最常用的应该就是`readme.md`文件。

### 具体规范

我们从**命名原则、根目录、业务逻辑**等方面进行目录构建

**（1）命名原则**

```apl
- 简洁明了（如下：）
  * src 源代码   
  * img  图片资源    image images
  * js  JavaScript脚本  
  * dep 第三方依赖包     development package
- 不使用复数（如下：）
  * 不使用 imgs   docs  
```

**（2）根目录（root）结构按职能划分**

```apl
-  src 源代码（逻辑）
-  doc  文档 
-  dep  第三方依赖包
-  test 测试
```

**（3）根据业务逻辑进行文件夹的划分**

```apl
- src目录名词解释：
  - common 公共资源
  - public/static 静态资源
  - component 组件
  - view/tpl 模板文件
```

```apl
-- src
  -- common 公共资源 
    -- img
      -- logo.png
      -- sprites.png
    -- css
      -- reset.css
    -- js
      -- conf.js 项目的配置文件
  -- public/static 静态资源
    -- js
    -- css
    -- tpl
      -- index.html
      -- shopcar.html
    -- img
  -- component 组件 
    -- home 
    -- shopcar
    -- login
    -- register
    -- user
    -- list
    -- detail
  -- view/tpl 项目模板，tpl是template的缩写
```

**（4）总结**

以上目录开发规范有两种使用途径：

- 使用前端工程化工具如`webpack`、`gulp`等进行手动打造
- 利用框架提供的脚手架工具进行修改

## 前端代码规范

这部分内容我们从以下两个方面进行讲解：

- `CSS`命名规范

  - `BEM`规范
  - `OOCSS`规范

- `JavaScript`编写规范

  - `ESLint`
  - `JSLint`

### `CSS`命名规范

#### （1）`BEM`规范

  概念： Block Element Modifier，它是一种前端命名方法，旨在帮助开发者实现模块化、可复用、高可维护性和结构化的CSS代码。 BEM是定义了一种css class的命名规范，每个名称及其组成部分都是存在一定的含义。

  使用 BEM 命名规范，理论上讲，每行 css 代码都只有一个选择器。

  BEM代表 块(block)，元素(element)，修饰符(modifier)，我们常用这三个实体开发组件。

  在选择器中，由以下三种符号来表示扩展的关系：

```apl
-   中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号；
    __  双下划线：双下划线用来连接块和块的子元素；
    _   单下划线：单下划线用来描述一个块或者块的子元素的一种状态；

示例：type-block__element_modifier
```

**块（block）**

一个块是设计或布局的一部分，它有具体且唯一地意义 ，要么是语义上的要么是视觉上的。

在大多数情况下，任何独立的页面元素（或复杂或简单）都可以被视作一个块。它的`HTML`容器会有一个唯一的`CSS`类名，也就是这个块的名字。

针对块的`CSS`类名会加一些前缀（ `ui-`），这些前缀在`CSS`中有类似 [命名空间](https://github.com/Tencent/tmt-workflow/wiki/⒛-[规范]--CSS-BEM-书写规范) 的作用。

一个块的正式（实际上是半正式的）定义有下面三个基本原则：

1. `CSS`中只能使用类名（不能是`ID`）。
2. 每一个块名应该有一个命名空间（前缀）
3. 每一条`CSS`规则必须属于一个块。

例如：一个自定义列表 `.list` 是一个块，通常自定义列表是算在 `mod` 类别的，在这种情况下，一个 `list` 列表的block写法应该为:

```apl
.list   
```

**元素（element）**

块中的子元素是块的子元素，并且子元素的子元素在 `bem` 里也被认为是块的直接子元素。

**一个块中元素的类名必须用父级块的名称作为前缀。**

如上面的例子，`li.item` 是列表的一个子元素，

```apl
.list{}
.list .item{}

.list{}
.list__item{}
```

**修饰符（modifier）**

一个“修饰符”可以理解为一个块的特定状态，标识着它持有一个特定的属性。

用一个例子来解释最好不过了。一个表示按钮的块默认有三个大小：小，中，大。为了避免创建三个不同的块，最好是在块上加修饰符。这个修饰符应该有个名字（比如：`size` ）和值（ `small`，`normal` 或者 `big` ）。

如上面的例子中，表示一个选中的列表，和一个激活的列表项

```apl
.list{}
.list.select{}
.list .item{}
.list .item.active{}

.list{}
.list_select{}
.list__item{}
.list__item_active{}
```

**书写原则**

1. 原则上不会出现`2层以上`选择器嵌套

使用`BEM`原则，用命名来解耦，所有类名都为一层，增加效率和复用性

1. 两层选择器嵌套出现在`.mod-xxx__item_current`子元素的情况，如下：

使用推荐的嵌套写法

**常规写法：**

```apl
.xxx{}
.xxx__item{}
.xxx__item_current{}
// 嵌套写法
.xxx__item_current .mod-xxx__link{}
```

**推荐：**

```apl
.xxx{}
.xxx__item{}
.xxx__item_hightlight{}
.xxx__product-name{}
.xxx__link{}
.xxx__ming-zi-ke-yi-hen-chang{}

// 嵌套写法
.xxx__item_current{
    .xxx__link{}
}
```

对应的HTML结构如下：

```html
<ul class="xxx">
    <li class="xxx__item">第一项
        <div class="xxx__product-name">我是名称</div>
        <span class="xxx__ming-zi-ke-yi-hen-chang">看类名</span>
        <a href="#" class="xxx__link">我是小东</a>
    <li>
    <li class="xxx__item xxx__item_current">第二项 且 当前选择项
        <div class="xxx__product-name">我是名称</div>
        <a href="#" class="xxx__item-link">我是link</a>
    <li>
    <li class="xxx__item xxx__item_hightlight">第三项 且 特殊高亮
         <div class="xxx__product-name">我是名称</div>
        <a href="#" class="xxx__item-link">我是小东</a>
    <li>
</ul>
```

**`BEM` 解决问题**

组件之间的完全解耦，不会造成命名空间的污染，如：`.mod-xxx ul li` 的写法带来的潜在的嵌套风险。

**性能**

`BEM` 命名会使得 `Class` 类名变长，但经过 `gzip` 压缩后这个带宽开销可以忽略不计

```apl
xxx__item_hightlight
```

#### （2）`OOCSS`规范

**概念：**`Object Oriented CSS`，面向对象的`CSS`，旨在编写高可复用、低耦合和高扩展的`CSS`代码。

`OOCSS`是以面向对象的思想去定义样式，将抽象和实现分离，抽离公共代码。

最典型的`oocss`规范使用案例：`bootstrap`

**区分结构与样式**

在定义一个可重用性的组件库时，我们仅创建基础的结构（html）和基础的类名，不应该创建类似于border, width, height, background等样式规则，这样使组件库更灵活和可扩展性。组件库在不同环境下的样式所要求不一样，若未能区分其结构和样式，给其添加样式，会使其变成一个特定的组件库，而难以重用。

以下是一个基础库创建的样式：

```css
.metadata{
  font-size: 1.2em;
  text-align: left;
  margin: 10px 0;
}
```

若在给其添加更多的样式：

```css
.metadata{
    font-size: 1.2em;
    margin: 10px 0;
    /*在基础组件上新加的样式*/
    width: 500px;
    background-color: #efefef;
    color: #fff;
}
```

这样就使前面创建的基础组件`metadata`变成了一个特定的组件了，使其在其他场景下较难复用。

**区分容器和内容**

把容器和内容独立分区，使内容能作用于任何容器下。

```css
#sidebar h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: .8em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}
```

上面我们定义了一个id为`sidebar` 中 `h3`的样式，但是我们发现在`footer` 中 `h3`的样式也基本一致，仅个别不一样，那么我们可能会这样写样式：

```css
#sidebar h3, #footer h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

#footer h3 {
  font-size: 1.5em;
  text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
}
```

甚至我们可能会用更糟糕的方式来写这个样式：

```css
#sidebar h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

#footer h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
}
```

我们可以看到上面的代码中出现了不必要的`duplicating styles`。而`OOCSS`鼓励我们应该思考在不同元素中哪些样式是通用的，然后将这些通用的样式从模块、组件、对象等中抽离出来，使其能在任何地方能够复用，而不依赖于某个特定的容器。

```css
.title-heading {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}
#footer .title-heading {
  font-size: 1.5em;
  text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
}
```

### `JavaScript`编写规范

代码规范通常包括以下几个方面:

- 变量和函数的命名规则
- 空格，缩进，注释的使用规则。
- 其他常用规范……

规范的代码可以更易于阅读与维护。

代码规范一般在开发前规定，可以跟你的团队成员来协商设置。

常见的`JavaScript`代码规范校验工具有：

- `ESLint`
- `JSLint`
- `JSHint`

#### `ESLint`

官网： <https://cn.eslint.org/>

`ESLint` 是在 `ECMAScript/JavaScript` 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。在许多方面，它和 `JSLint`、`JSHint` 相似，除了少数的例外：

- `ESLint` 使用 `Espree` 解析 `JavaScript`。
- `ESLint` 使用 `AST` 去分析代码中的模式
- `ESLint` 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。

以上来自官网。简单来说，`ESLint`就是一个代码风格检测工具。

**如何使用：**

```apl
# 安装
npm install -g eslint

# 如果你第一次使用 ESLint，你必须使用 –init 命令新建一个配置文件
eslint --init

# 使用 ESLint 检测任何 JavaScript 文件：
eslint test.js test2.js

# ESLint 中一些规则运行命令它可以帮你自动修复
eslint test.js --fix
```

**规则定义：**

- JavaScript - 使用 .eslintrc.js 然后输出一个配置对象。
- YAML - 使用 .eslintrc.yaml 或 .eslintrc.yml 去定义配置的结构。
- JSON -使用 .eslintrc.json 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- Deprecated -使用 .eslintrc，可以使 JSON 也可以是 YAML。
- package.json - 在 package.json 里创建一个 eslintConfig 属性，在那里定义你的配置。

`ESLint`规范配置参考：<https://cn.eslint.org/docs/rules/>

#### `JSLint`

**官网：** <https://www.jslint.com/>

`JSLint`是一款不错的前端`javascript`代码校验工具，可以检查代码规范化，压缩`JS`，`CSS`等，但是他的语法规范检查有时会比较“苛刻”。

#### `JSHint`

**官网：** <https://jshint.com/>

`JSHint`比起`JSLint`而言，会更加轻量级一些。它能够找出代码中的语法错误，并且建议更好的一种编码风格。当然，它也不是强制性的非要你根据它规定的编码风格来做。因为它提供了一系列的配置，你可以随时关掉某些你觉得不必要的错误提示。

**如何使用：**

```apl
# 安装
npm install jshint -g

# 在要扫描的目录下运行命令
jshint . >> jshint_result.txt
```

这样扫描结果都写到`jshint_result.txt`的文件。
相比`JSLint`那么严格的规则，其实很多我都觉得是个人偏好问题，`JSHint`更加合理。

`JSHint`是一个全局的函数:

```js
let result = JSHINT(source, options);
```

`JSHint()`方法解释：

- 第一个参数source : 必选项。表示需要检查的代码，js或者json，可以传一个字符串或者一个数组。如果传字符串，需要用 ’\r’ 或者 ’\n’来分隔一行一行的代码；如果传数组，则每一个数组元素表示一行的代码。
- 第二个参数option : 可选项。表示代码检查的配置项。大部分的都是bool类型的，也有一部分，例如predef，可以是一个array，含有全局变量或者全局方法；或者是一个object，key是全局变量或者方法，value是一个bool值，表示是否被定义过。
- 返回值：如果代码没有问题，JSHint会返回一个true；否则返回false。

关于第2个参数的配置项（部分）：

```apl
prop description
asi 是否使用自动插入分号
bitwise 如果是true，则禁止使用位运算符
boss 如果是true，则允许在if/for/while的条件中使用=做赋值操作
curly 如果是true，则要求在if/while的模块时使用TAB结构
debug 如果是true，则允许使用debugger的语句
eqeqeq 如果是true，则要求在所有的比较时使用=和!
eqnull 如果是true，则允许使用== null
evil 如果是true，则允许使用eval方法
forin 如果是true，则不允许for in在没有hasOwnProperty时使用
immed 如果是true，则要求“立即调用”(immediate invocations)必须使用括号包起来
laxbreak 如果是true，则不检查换行，那么自动插入分号的选项必须开启。
maxerr 默认是50。 表示多少错误时，jshint停止分析代码
newcap 如果是true，则构造函数必须大写
noarg 如果是true，则不允许使用arguments.caller和arguments.callee
noempty 如果是true，则不允许使用空函数
nonew 如果是true，则不允许不做赋值的构造函数，例如new UIWindow();
nomen 如果是true，则不允许在名称首部和尾部加下划线
onevar 如果是true，则在一个函数中只能出现一次var
passfail 如果是true，则在遇到第一个错误的时候就终止
plusplus 如果是true，则不允许使用++或者- -的操作
regexp 如果是true，则正则中不允许使用.或者[^…]
undef 如果是ture，则所有的局部变量必须先声明之后才能使用
sub 如果是true，则允许使用各种写法获取属性(一般使用.来获取一个对象的属性值)
strict 如果是true，则需要使用strict的用法， 详见http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
white 如果是true，则需要严格使用空格用法。
```

#### （4）三种规范工具的对比

`ESLint`、`JSLint`、`JSHint`这三个工具各有特色，我只是做一下对比，选择的话，看个人需求就好了。

**`JSLint`**

优点

- 配置是老道已经定好的，开箱即用。

不足

- 有限的配置选项，很多规则不能禁用
- 规范严格，凡是不符合老道所认为的好的风格的，都会有警告(这一项就看你是否完全认同老道了)
- 扩展性差
- 无法根据错误定位到对应的规则

**`JSHint`**

优点

- 有了很多参数可以配置
- 支持配置文件，方便使用
- 支持了一些常用类库
- 支持了基本的`ES6`

不足

- 不支持自定义规则
- 无法根据错误定位到对应的规则

**`ESLint`**

优点

- 默认规则里面包含了`JSLint`和`JSHint`的规则，易于迁移(这肯定是故意的XD)
- 可配置为`警告`和`错误`两个等级，或者直接禁用掉
- 支持插件扩展
- 可以自定义规则
- 可以根据错误定位到对应的规则
- 支持`ES6`
- 唯一一个支持`JSX`的工具

不足

- 需要进行一些自定义配置(因为太灵活了嘛，不过文档是很详细的)
- **慢** (它比其他两个都要慢)

## 开发文档编写规范

- html规范
- css规范
- js规范

### HTML规范

**（1）标签上属性的顺序建议如下**

- class ( class 是为高可复用组件设计的,所以应处在第一位)
- id name (id 更加具体且应该尽量少使用,所以将它放在第二位)
- data-*
- src for type href value
- placeholder title alt
- aria-* role
- required readonly disabled

**（2）id/class 命名规则: BEM OOCSS SMACSS(扩展)**

**（3）注释规范(最好用英文)**

```html
<div class="container">
<!-- 头部--start -->
<header></header>
<!-- 头部--end -->
<!-- 内容--start -->
<div class="content">
</div>
<!-- 内容--end -->
<!-- 底部--start -->
<footer>
</footer>
<!-- 底部--end -->
</div>
```

### CSS规范

**属性顺序：**

- 位置属性 position top right z-index display float
- 大小 width height padding margin
- 文字系列 font line-height letter-spacing color text-align
- 背景 background border
- 其他 animation transition

**尽量不使用标签选择器：**

```css
.content ul.first-child
```

```html
<div class="content">
  <ul>
      <li>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
      </li>
   </ul>
   <ul>
      <li>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
      </li>
   </ul>
</div>
```

**属性尽量使用简化缩写：**

```css
body{
   margin: 10px 0;
   background: url('./img.png') center;
}
```

**去掉小数点前面的 0**

```css
body{
  margin: 10px .8px;
  background: url('./img.png') center;
}
```

### JS规范

**变量名**

变量名推荐使用驼峰法来命名(**`camelCase`**):

```js
firstName = "Xiao";
lastName = "Dong";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```

**空格与运算符**

通常运算符 ( = + - * / ) 前后需要添加空格:

实例:

```js
let x = y + z;
let values = ["Volvo", "Saab", "Fiat"];
```

**代码缩进**

通常使用 4 个空格符号来缩进代码块：

函数:

```js
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

**语句规则**

简单语句的通用规则：一条语句通常以分号作为结束符。

实例:

```js
let values = ["Volvo", "Saab", "Fiat"];

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

复杂语句的通用规则:

- 将左花括号放在第一行的结尾。
- 左花括号前添加一空格。
- 将右花括号独立放在一行。
- 不要以分号结束一个复杂的声明。

函数：

```js
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

循环:

```js
for (i = 0; i < 5; i++) {
  x += i;
}
```

条件语句:

```js
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

**对象规则**

对象定义的规则:

- 将左花括号与类名放在同一行。
- 冒号与属性值间有个空格。
- 字符串使用双引号，数字不需要。
- 最后一个属性-值对后面不要添加逗号。
- 将右花括号独立放在一行，并以分号作为结束符号。

实例:

```js
let person = {
  firstName: "Xiao",
  lastName: "Dong",
  age: 18,
  eyeColor: "blue"
};
```

短的对象代码可以直接写成一行:

实例:

```js
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

**命名规则**

一般很多代码语言的命名规则都是类似的，例如:

- 变量和函数为小驼峰法标识, 即除第一个单词之外，其他单词首字母大写（ `lowerCamelCase`）
- 全局变量为大写 (`UPPERCASE` )
- 常量 (如 PI) 为大写 (`UPPERCASE` )

变量命名你是否使用这几种规则： `hyp-hens`, `camelCase`, 或 `under_scores` ?

`HTML` 和 `CSS` 的横杠(-)字符:

`HTML5` 属性可以以 data- (如：data-quantity, data-price) 作为前缀。

`CSS` 使用 - 来连接属性名 (font-size)。

```apl
- 通常在 JavaScript 中被认为是减法，所以不允许使用。
```

**下划线:**

很多程序员比较喜欢使用下划线(如：date_of_birth), 特别是在 `SQL` 数据库中。

`PHP` 语言通常都使用下划线。

帕斯卡拼写法(`PascalCase`):

帕斯卡拼写法(`PascalCase`) 在 C 语言中语言较多。

驼峰法：

`JavaScript` 中通常推荐使用驼峰法，`jQuery` 及其他 `JavaScript` 库都使用驼峰法。

```apl
变量名不要以 $ 作为开始标记，会与很多 JavaScript 库冲突。
```

**文件扩展名**

`HTML` 文件后缀可以是 `.html` (或 `.htm`)。

`CSS` 文件后缀是 `.css` 。

`JavaScript` 文件后缀是 `.js` 。

**使用小写文件名**

大多 Web 服务器 (Apache, Unix) 对大小写敏感： `london.jpg` 不能通过 `London.jpg` 访问。

其他 Web 服务器 (Microsoft, IIS) 对大小写不敏感： `london.jpg` 可以通过 `London.jpg` 或 `london.jpg` 访问。

你必须保持统一的风格，我们建议统一使用小写的文件名。

## 工作流程规范

我们从 日报 、 周报以及邮件格式三个方面来了解工作流程规范。

### 工作日报

工作日报又称为工作日志， 工作日志是指针对自己的工作，每天记录工作的内容、所花费的时间以及在工作过程中遇到的问题，解决问题的思路和方法。最好可以详细客观的记录下你所面对的选择、观点、观察、方法、结果和决定，这样每天日事日清，经过长期的积累，才能达到通过工作日志提高自己的工作技能。

工作日报是对当天工作的反馈， 当天已经做了的主要工作和进展，当日经验和教训以及反思，明日的打算等等。

具体总结下来，大概包含以下的方面：

- 上午你做什么
- 下午你做了什么
- 遇到什么问题？是否有解决？
- 明天的计划？（明天准备做什么）
- 最后在内容最后面跟上日期

示例：

```apl
领导：
 上午工作内容如下：
  项目首页布局完成，首页逻辑和交互代码还差2个轮播未完成

 下午工作内容如下： 
  项目首页逻辑和交互代码全部完成
  
 遇到的困难如下：
  首页轮播书写实现防抖有些困难，但是已经解决
  遇到了xxx问题，是否已经解决
  
 明天工作计划如下： 
  项目分类页完成
  项目详情页完成
  
     请领导熟知！
     
     谢谢
     
              技术部 - 前端 - 小东
              20xx/xx/xx
```

### 工作周报

工作周报，简称周报，是每周一次的工作报告。相关概念有工作日报、工作月报、周例会、工作总结、工作计划等**。**

工作周报的内容包括工作计划、工作总结、上级回复等，适用于公司、部门、团队、社会团体、项目组等各种组织，是最常见的组织管理基本方法之一。

示例：

```apl
20xx.xx.xx-20xx.xx.xx周报：

  1. 本周工作主要内容：
     - 完成了宏视云h5播放器升级及大数据上报；
     - 修复xk-h5播放器bug：在三星手机自带浏览器无法进行滑动seek; 
     - admin-console后台管理系统初步完成终端访问页面和数据统计概览页面的制作；
     
  2. 工作中存在的主要问题：
     - webserver大数据展示页面移植到admin-console后台管理系统存在bootstrap与jquery.easyui冲突等几个兼容性问题；
     - 解决这个问题的思路可能不是最有效的方法，可能使用iframe会快些；使用iframe存在如何在easyui页面控制iframe页面及如何在浏览器窗口改变时，iframe也跟着改变等问题；
     
  3. 下周工作计划：
     - 完成上周未完成的admin-console大数据展示页面的制作；
     - 完成工作以后，如果有时间的话尝试下用iframe解决；
     - 询问师兄有没有可以帮忙做的工作；
```

### 邮件发送格式

在日常办公中，发送邮件是最常见的工作汇报形式，也是比较正式的一种形式，所以要掌握基本的邮件发送格式。

常用的邮件格式参考：

```apl
1. 明确邮件发送谁？

   - 参与者： 一定要想清楚， 如果不清楚， 记得问一下你直接上司（同事）

2. 邮件的主题： 

   - 主题必须有且仅有一个
   - 必要时， 可以添加： 【请批阅】 、 等字眼

3. 邮件正文

   - 称呼要明确： 

   - 条理分明
     举例：
```

~~~apl
 各位领导好：
     以下内容是xxx 请熟知/请批阅
 ```
~~~

1. 署名：
   - 什么部门 什么职位 什么姓名 什么时间
2. 附件
   - 需要说明附件是做什么的？
3. 转发;
   - 需要对原邮件进行说明。，然后写清楚自己的意图
