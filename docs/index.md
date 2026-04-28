---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: "wing的小盒子"
  text: "wing 的成长之路"
  tagline: 记录前端学习、源码阅读、效率工具与生活观察
  image:
    src: /logo.png
    alt: wing的小盒子
    class: image-src
  actions:
    - theme: brand
      text: 进入前端物语
      link: /fe/
    - theme: alt
      text: 查看源码阅读
      link: /analysis/
    - theme: alt
      text: 浏览提效工具
      link: /efficiency/

features:
  - title: 前端物语
    details: 从 JavaScript、CSS、TypeScript 到浏览器与算法，逐步搭起前端基础结构。
    link: /fe/
    linkText: 查看栏目
  - title: 源码阅读
    details: 通过 Vue 等前端框架源码拆解，沉淀原理理解与实现思路。
    link: /analysis/
    linkText: 开始阅读
  - title: 提效工具
    details: 持续整理 Windows 与开发工作流中的高频工具、配置和实践经验。
    link: /efficiency/
    linkText: 浏览清单
  - title: 学习记录
    details: 把零散笔记整理成可复用的知识卡片，方便回顾与长期积累。
    link: /pit/
    linkText: 查看记录
---

<style>
.m-home-layout .image-src {
  transform: rotate(0deg);
  transition: transform 0.3s ease-in-out;
}

.m-home-layout .image-src:hover {
  transform: rotate(360deg);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
