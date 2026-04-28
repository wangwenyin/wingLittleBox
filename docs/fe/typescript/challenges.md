# TypeScript 类型体操

类型体操的核心不是“炫技”，而是理解 TypeScript 类型系统的组合能力。真正有价值的部分，通常落在组件库、工具库和复杂业务约束里。

## 学习前提

在进入类型体操之前，建议先掌握：

- 泛型
- 联合类型
- 交叉类型
- 条件类型
- 映射类型
- 索引访问类型

## 一个最常见的例子

实现一个简化版 `Pick`：

```ts
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

## 条件类型

```ts
type IsString<T> = T extends string ? true : false
```

它的关键价值是“根据输入类型分支返回不同结果”。

## `infer` 的作用

`infer` 用来在条件类型中提取某一部分类型信息。

```ts
type ReturnTypeOf<T> = T extends (...args: never[]) => infer R ? R : never
```

## 常见练习方向

- 提取函数返回值
- 提取数组元素类型
- 拼接字符串字面量类型
- 递归处理对象结构
- 将联合类型转换为其他结构

## 学习建议

- 先做工具类型，再做题库
- 不要只记答案，要能解释每一步
- 遇到复杂题时，先把目标拆成 2 到 3 层中间类型
- 业务里优先可读性，不必把所有逻辑都压进类型系统

## 推荐目标

当你能熟练读懂并实现这些类型时，类型基础就已经比较扎实：

- `Pick`
- `Omit`
- `Exclude`
- `Extract`
- `Parameters`
- `ReturnType`
- `NonNullable`
