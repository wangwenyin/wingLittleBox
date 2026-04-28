# JavaScript 基础知识

JavaScript 的门槛看起来不高，但真正容易出问题的地方往往正是“基础”。很多线上 bug，最后都能回到类型判断、值拷贝、隐式转换、作用域和执行时机这些基本问题上。

这篇文章先围绕类型系统展开，目标不是把语法点背完，而是建立一套足够稳定的判断方式。

## 数据类型总览

JavaScript 目前可以分成两大类数据类型：

- 原始类型：`string`、`number`、`boolean`、`null`、`undefined`、`symbol`、`bigint`
- 引用类型：`object`

常见判断结果如下：

```js
typeof 'wing' // string
typeof 18 // number
typeof true // boolean
typeof undefined // undefined
typeof Symbol('id') // symbol
typeof 10n // bigint
typeof null // object
typeof {} // object
typeof [] // object
typeof function () {} // function
```

这里最容易让人困惑的是两点：

- `null` 的 `typeof` 结果是 `object`
- 数组、本质对象、函数都属于引用类型，但判断结果并不完全一致

这意味着你不能只靠一个 `typeof` 走天下。

## `typeof`、`instanceof`、`toString` 的边界

### `typeof` 适合判断什么

`typeof` 适合快速判断原始类型，尤其是：

- `string`
- `number`
- `boolean`
- `undefined`
- `symbol`
- `bigint`
- `function`

但它对下面这些情况区分能力很弱：

```js
typeof null // object
typeof [] // object
typeof {} // object
```

### `instanceof` 适合判断什么

`instanceof` 判断的是原型链关系，更适合引用类型：

```js
[] instanceof Array // true
[] instanceof Object // true
new Date() instanceof Date // true
```

但它也有边界：

- 跨 iframe 或跨运行上下文时可能失效
- 不适合判断原始类型

### 更稳妥的通用方案

需要区分数组、日期、正则时，更推荐：

```js
Object.prototype.toString.call([]) // [object Array]
Object.prototype.toString.call(new Date()) // [object Date]
Object.prototype.toString.call(/js/) // [object RegExp]
```

在业务里通常可以这样取舍：

- 原始类型优先 `typeof`
- 数组优先 `Array.isArray`
- 特殊对象优先 `Object.prototype.toString.call`

## 原始类型与引用类型

理解这件事，比记语法更重要，因为它直接决定你在赋值、传参、拷贝时会不会踩坑。

### 原始类型

原始类型存储的是值本身：

```js
const a = 1
let b = a
b = 2

console.log(a) // 1
console.log(b) // 2
```

修改 `b` 不会影响 `a`。

### 引用类型

引用类型变量里保存的是“引用地址”：

```js
const obj1 = { name: 'wing' }
const obj2 = obj1
obj2.name = 'box'

console.log(obj1.name) // box
```

这里不是 `obj1` 被“复制”了一份，而是 `obj1` 和 `obj2` 指向了同一个对象。

### 业务里的典型坑

最常见的问题是以为自己做了“复制”，实际上只是多拿了一份引用：

```js
const form = { name: 'wing', city: 'shanghai' }
const draft = form

draft.city = 'beijing'
```

结果是 `form.city` 也被改了。对于状态管理、表单编辑、缓存快照来说，这类错误很常见。

## 浅拷贝与深拷贝

### 浅拷贝

常见浅拷贝写法：

```js
const user = { name: 'wing', profile: { city: 'shanghai' } }
const nextUser = { ...user }

nextUser.name = 'box'
nextUser.profile.city = 'beijing'
```

这时：

- `nextUser.name` 改了，不影响 `user.name`
- `nextUser.profile.city` 改了，会影响 `user.profile.city`

因为展开运算符只复制第一层。

### 深拷贝

如果需要彻底断开嵌套对象之间的引用关系，就要做深拷贝。常见做法包括：

- `structuredClone`
- 手写递归拷贝
- 借助工具库

不太推荐长期依赖：

```js
JSON.parse(JSON.stringify(data))
```

因为它会丢失：

- `undefined`
- `symbol`
- `Date`
- `Map`
- `Set`
- 函数

## 隐式类型转换

JavaScript 的灵活性，很大一部分也来自隐式转换；问题也恰恰出在这里。

```js
0 == false // true
'' == false // true
null == undefined // true
[] == false // true
```

如果你不能清楚解释每一条为什么成立，那就不要依赖这些规则。

### `==` 与 `===`

- `==` 会发生类型转换
- `===` 不会进行额外转换，同时比较类型和值

日常开发建议：

- 优先使用 `===`
- 只在你非常明确规则时才使用 `==`

### 真值与假值

这些值在条件判断里会被当成假：

- `false`
- `0`
- `''`
- `null`
- `undefined`
- `NaN`

这会带来一个典型问题：

```js
if (!value) {
  // 这里到底是空字符串、0、null，还是 undefined？
}
```

如果业务里 `0` 和空字符串是合法值，这种判断就不够严谨。

## `null` 与 `undefined`

这两个值经常被混用，但语义最好分开：

- `undefined`：通常表示“还没有值”或“未提供”
- `null`：通常表示“明确地没有值”

例如接口设计时：

- 某字段缺失，可以是 `undefined`
- 某字段明确置空，可以是 `null`

如果这两个含义在系统里不区分，后续排查数据问题会很痛苦。

## 函数参数与类型边界

很多基础问题其实都出在“边界没有收紧”。

例如一个函数接收后端返回值时，如果完全相信输入结构：

```js
function formatUser(user) {
  return user.name.trim()
}
```

一旦 `user` 或 `user.name` 不符合预期，就会直接报错。更稳妥的做法是：

- 在入参边界做校验
- 对可空值做兜底
- 对复杂对象先标准化，再进入业务逻辑

## 实践建议

- 判断数组时优先用 `Array.isArray`
- 判断空值时明确区分 `null` 和 `undefined`
- 写条件分支时，不要一律用“真值判断”
- 对对象复制行为保持警惕，默认先思考它是不是浅拷贝
- 接口返回值进入业务前先做结构校验

## 小结

JavaScript 的基础不难，但容易“以为自己会了”。真正的差别在于：

- 你能不能快速判断一个值到底是什么
- 你知不知道拷贝、赋值和传参背后是不是共享引用
- 你能不能避免被隐式转换悄悄坑到

把这几件事打牢，后面再看闭包、原型链、异步和框架源码，会轻松很多。

## 延伸阅读

- 闭包与作用域链
- 原型与原型链
- this 绑定规则
- Promise 与事件循环
