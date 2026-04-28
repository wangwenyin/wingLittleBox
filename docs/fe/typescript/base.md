# TypeScript 基础知识

TypeScript 的价值不在于“把 JavaScript 写得更复杂”，而在于它帮你把很多原本运行时才会暴露的问题，提前拉到了编码阶段。

当项目开始变大、接口开始变多、组件开始复用时，类型系统带来的约束会越来越有价值。

## 为什么要用 TypeScript

最直接的收益有四类：

- 让接口契约更清晰
- 在重构时更有安全感
- 提前发现参数、返回值、属性访问错误
- 提升团队协作时的可读性

例如下面这种 JavaScript 代码：

```js
function formatPrice(price) {
  return price.toFixed(2)
}
```

如果有人传入的是字符串，问题只有运行时才会暴露。改成 TypeScript 后：

```ts
function formatPrice(price: number): string {
  return price.toFixed(2)
}
```

类型系统会更早地提醒你输入边界不对。

## 基础类型

最常见的基础类型如下：

```ts
const name: string = 'wing'
const age: number = 18
const isAdmin: boolean = false
const tags: string[] = ['vue', 'ts']
```

除了这些，实际项目里也经常会看到：

- `null`
- `undefined`
- `unknown`
- `never`

其中最需要先建立意识的是：

- `any` 表示放弃类型约束
- `unknown` 表示“我还不知道它是什么，但必须先检查后再使用”

## 对象类型

对象是业务里最常见的数据结构。

```ts
type User = {
  id: number
  name: string
  email?: string
}
```

这里的 `?` 表示可选属性，也就是这个字段可以不存在。

### 为什么对象类型很重要

因为前端大多数真实数据都长这样：

- 接口返回体
- 表单数据
- 组件 props
- 状态管理里的 state

如果这些核心对象没有清晰类型，工程复杂度一上来，问题会迅速放大。

## 函数类型

函数类型至少应明确两件事：

- 参数是什么
- 返回值是什么

```ts
function sum(a: number, b: number): number {
  return a + b
}
```

对于工具函数和公共函数，明确返回值尤其重要。这样做有两个价值：

- 调用方知道预期结果
- 你自己重构时也更不容易破坏契约

## 联合类型

联合类型适合描述“这个值有多种合法形态”的场景：

```ts
let value: string | number
value = '1'
value = 1
```

它很适合：

- 状态值
- 兼容多种输入格式的工具函数
- 有明确有限集合的字段

例如：

```ts
type Status = 'idle' | 'loading' | 'done' | 'error'
```

这比随手写字符串更稳，因为：

- 拼写错误能被检查出来
- 可选值范围更清晰

## 类型收窄

联合类型一旦出现，就经常需要“收窄”。

```ts
function format(value: string | number) {
  if (typeof value === 'string') {
    return value.trim()
  }

  return value.toFixed(2)
}
```

TypeScript 会根据分支条件推断此时 `value` 更具体的类型，这就是类型收窄。

这是 TS 很重要的一种使用体验，因为它让“写判断”和“拿到更准确的类型”形成了联动。

## 接口与类型别名

两者都能描述结构：

```ts
interface Article {
  title: string
  content: string
}

type Status = 'idle' | 'loading' | 'done'
```

一个足够实用的经验是：

- 面向对象结构、可扩展契约可优先考虑 `interface`
- 联合、映射、组合类型通常用 `type`

这不是绝对规则，但足够适合作为团队约定的起点。

## 泛型

泛型的价值，不是语法高级，而是让类型跟着数据一起流动。

```ts
function first<T>(list: T[]): T | undefined {
  return list[0]
}
```

这里的 `T` 不是固定类型，而是调用时根据输入自动推导出来。

### 为什么泛型重要

因为你不可能为每一种数据都重写一套逻辑：

- 数组工具函数
- 请求封装
- 表格列定义
- 组件库

这些高复用代码都需要泛型来保留“类型信息不丢失”。

## `any`、`unknown` 与边界数据

### `any`

`any` 用起来最省事，但代价是类型系统基本失效。

```ts
let data: any
data.foo.bar.baz()
```

这类代码很自由，但也把风险重新带回了运行时。

### `unknown`

`unknown` 更适合处理边界输入：

```ts
function parse(value: unknown) {
  if (typeof value === 'string') {
    return value.trim()
  }

  return ''
}
```

它强迫你先判断，再使用，更适合：

- 接口原始返回值
- URL 参数
- 本地缓存反序列化结果
- 第三方输入

## 在真实项目里先给谁补类型

如果项目还没完全类型化，不要试图一口气补完所有地方。优先级建议是：

1. 接口返回值
2. 组件 props / emits
3. 公共工具函数
4. 状态管理结构
5. 表单数据模型

原因很简单：这些地方是数据流的主干，类型收益最高。

## 实践建议

- 不要一上来就大量使用 `any`
- 边界数据优先定义类型
- 组件 props、接口返回值、工具函数要优先补类型
- 联合类型出现后，记得用收窄保证分支安全
- 遇到复杂类型时先保证可读性，再追求技巧

## 小结

TypeScript 最值得建立的，不是“我会不会写高级类型”，而是下面这些基本习惯：

- 输入输出先写清楚
- 对象结构先定义清楚
- 联合类型出现后及时收窄
- 泛型用于复用，不是用于炫技
- 把 `any` 当例外，不当默认

把这些做好，项目质量和协作体验都会稳定很多。

## 延伸阅读

- 条件类型
- 映射类型
- `infer`
- 工具类型 `Partial`、`Pick`、`Omit`
