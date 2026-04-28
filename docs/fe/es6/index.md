# ES6 常用知识

ES6 不是某几个新语法点的集合，而是 JavaScript 从“能写”走向“更适合工程化协作”的一个重要分水岭。很多现在看起来理所当然的写法，比如模块化、解构、箭头函数、Promise，其实都是从这之后真正成为主流的。

这篇文章不追求把所有语法列全，而是聚焦那些在日常开发里最常用、最值得理解透的部分。

## `let` 与 `const`

在 ES6 之前，变量声明主要依赖 `var`。它最大的问题不是“老”，而是规则不够直观：

- 没有真正的块级作用域
- 存在变量提升带来的理解成本
- 更容易出现意外覆盖

### `let`

`let` 具有块级作用域：

```js
if (true) {
  let count = 1
}

// count 在这里不可访问
```

这意味着变量作用范围更清晰，更符合“在哪里声明，就在哪里可用”的直觉。

### `const`

`const` 表示变量绑定不能被重新赋值：

```js
const user = { name: 'wing' }
user.name = 'box'
```

这里虽然对象内部还能修改，但 `user` 这个变量本身不能再指向别的对象。

### 实际建议

- 能不用变的变量，优先 `const`
- 需要重新赋值时，再用 `let`
- 除非维护旧代码，否则尽量少用 `var`

## 模板字符串

模板字符串解决的，不只是字符串拼接麻烦，而是让表达式嵌入和多行文本更自然。

```js
const name = 'wing'
const text = `hello, ${name}`
```

相比传统拼接：

```js
const text = 'hello, ' + name
```

模板字符串在下面这些场景尤其有价值：

- 动态文案拼接
- HTML 片段拼接
- 多行 SQL / 文本 / 提示信息

## 解构赋值

解构赋值的核心价值是“从结构里直接取值”，减少冗余访问路径。

```js
const user = { name: 'wing', age: 18 }
const { name, age } = user

const list = [1, 2, 3]
const [first, second] = list
```

### 为什么它重要

在业务里你会频繁处理：

- 接口返回对象
- 组件参数
- 配置项对象
- Hook / composable 返回值

解构能让代码更聚焦“我要用什么”，而不是反复写 `user.name`、`user.age`。

### 常见注意点

解构并不是深拷贝，它只是取值：

```js
const { profile } = user
```

如果 `profile` 是对象，这里拿到的仍然是原引用。

## 展开运算符

展开运算符在数组和对象里都非常高频：

```js
const a = [1, 2]
const b = [...a, 3]

const base = { name: 'wing' }
const next = { ...base, city: 'shanghai' }
```

### 常见用途

- 合并数组
- 合并对象
- 传函数参数
- 做浅拷贝

### 需要特别记住的一点

展开运算符通常只做浅拷贝，不会递归复制嵌套对象：

```js
const state = { user: { name: 'wing' } }
const nextState = { ...state }
```

这里的 `nextState.user` 和 `state.user` 仍然可能指向同一个对象。

## 箭头函数

箭头函数让函数表达更简洁：

```js
const sum = (a, b) => a + b
```

但它真正重要的地方在于 `this` 规则不同。

### 箭头函数的特点

- 写法更短
- 没有自己的 `this`
- 没有自己的 `arguments`
- 不适合作为构造函数

### 为什么“没有自己的 this”很重要

很多回调场景下，箭头函数能直接继承外层 `this`，避免手动保存上下文：

```js
class Counter {
  constructor() {
    this.count = 0
  }

  start() {
    setInterval(() => {
      this.count += 1
    }, 1000)
  }
}
```

但也不要无脑全用箭头函数。如果一个对象方法本来就需要自己的 `this`，箭头函数反而会出问题。

## Promise

Promise 是 ES6 非常关键的一部分，因为它把异步状态建模得更统一了。

Promise 有三种状态：

- `pending`
- `fulfilled`
- `rejected`

```js
fetch('/api/user')
  .then((res) => res.json())
  .catch((err) => console.error(err))
```

### 它解决了什么问题

在 Promise 普及之前，异步逻辑经常层层嵌套，难读也难维护。Promise 把异步结果包装成一个可继续链式处理的对象，让成功和失败路径都更清晰。

### 使用时要注意

- `then` 返回的新 Promise 会继续往下传递
- 错误会向后冒泡到 `catch`
- 多个异步组合时要注意是串行还是并行

## `async/await`

`async/await` 本质上是 Promise 的语法糖，但它极大改善了异步代码的可读性。

```js
async function loadUser() {
  try {
    const res = await fetch('/api/user')
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}
```

### 为什么它更适合业务代码

因为很多异步流程本来就是“先做 A，再做 B，再处理结果”的顺序逻辑。用 `async/await` 写出来更接近同步思维，也更方便做错误处理。

### 不要忽略的点

- `await` 只能在 `async` 函数里使用
- `await` 的是 Promise 结果
- 如果多个请求可以并行，不要全部串行等待

例如：

```js
const [user, settings] = await Promise.all([
  fetchUser(),
  fetchSettings()
])
```

## 模块化

模块化让代码不再是“全局脚本拼接”，而是显式声明依赖关系：

```js
export function sum(a, b) {
  return a + b
}

import { sum } from './math.js'
```

### 模块化的真正价值

- 依赖边界更清晰
- 更适合复用和测试
- 更利于构建工具分析依赖图
- 更容易做按需加载和 Tree Shaking

## 小结

ES6 真正改变前端开发的，不是语法“更新潮”，而是代码组织方式更现代了：

- `let` / `const` 让作用域更清晰
- 解构和展开让数据处理更自然
- 箭头函数让回调表达更简洁
- Promise 和 `async/await` 让异步更可读
- 模块化让工程边界更明确

## 延伸阅读

- Set / Map
- Symbol
- Generator
- Proxy / Reflect
