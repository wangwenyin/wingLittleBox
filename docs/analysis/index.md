# 源码阅读

源码阅读栏目主要围绕 Vue 相关机制展开，重点不是复述实现细节，而是梳理“设计动机、关键结构和运行流程”。

## 阅读建议

如果你是第一次系统读源码，推荐按照下面顺序进入：

1. [响应式原理](/analysis/vue/1)
2. [VNode节点](/analysis/vue/2)
3. [VirtualDOM与diff](/analysis/vue/3)
4. [Vue.js异步更新DOM策略及nextTick](/analysis/vue/4)
5. [依赖收集](/analysis/vue/5)
6. [Vue事件机制](/analysis/vue/6)
7. [Vue组件间通信](/analysis/vue/7)
8. [Vuex源码解析](/analysis/vue/8)

## 阅读方法

- 不追求一次看懂全部实现
- 先画流程，再看源码入口
- 先理解模块职责，再看函数细节
- 每读完一篇，最好能总结“这个机制解决了什么问题”
