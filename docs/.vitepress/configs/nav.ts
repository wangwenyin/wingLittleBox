import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '前端物语',
    items: [
      { text: 'JavaScript 基础知识', link: '/fe/javascript/types' },
      { text: 'CSS 理论知识点', link: '/fe/css/' },
      { text: 'ES6 常用知识', link: '/fe/es6/' },
      {
        items: [
          { text: 'TypeScript 基础知识', link: '/fe/typescript/base' },
          { text: 'TypeScript 类型体操', link: '/fe/typescript/challenges' }
        ]
      },
      { text: 'Webpack', link: '/fe/webpack/' },
      { text: '浏览器相关知识', link: '/fe/browser/' },
      { text: '编程题', link: '/fe/coding/' },
      { text: '前端算法', link: '/fe/alg/' }
    ],
    activeMatch: '^/fe'
  },
  { text: '电影人生', link: '/movie-life', activeMatch: '^/movie-life' },
  { text: '源码阅读', 
    items: [
      {
        text: 'vue2.0',
        items: [
          { text: '响应式原理', link: '/analysis/vue/1' },
          { text: 'VNode节点', link: '/analysis/vue/2' },
          { text: 'VirtualDOM与diff', link: '/analysis/vue/3' },
          { text: 'Vue.js异步更新DOM策略及nextTick', link: '/analysis/vue/4' },
          { text: '依赖收集', link: '/analysis/vue/5' },
          { text: 'Vue事件机制', link: '/analysis/vue/6' },
          { text: 'Vue组件间通信', link: '/analysis/vue/7' },
          { text: 'Vuex源码解析', link: '/analysis/vue/8' },
        ],
      }
    ],
    activeMatch: '^/analysis' },
  {
    text: '笔记',
    items: [
      { text: '日常笔记', link: '/daily-notes/', activeMatch: '^/daily-notes' },
      {
        text: '踩坑记录',
        items: [
          { text: 'npm 踩坑记录', link: '/pit/npm' },
          { text: '第三方库踩坑记录', link: '/pit/library' },
          { text: 'PC 踩坑记录', link: '/pit/pc' },
          { text: 'H5 踩坑记录', link: '/pit/h5' },
          { text: '微信开发踩坑记录', link: '/pit/wechat' }
        ]
      }
    ],
    activeMatch: '^/daily-notes|pit'
  },
  {
    text: '提效工具',
    items: [
      {
        text: '软件推荐与配置',
        items: [
          { text: '多平台软件', link: '/efficiency/software/cross-platform' },
          { text: 'Mac 平台', link: '/efficiency/software/mac' },
          { text: 'Windows 平台', link: '/efficiency/software/windows' },
          { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
          { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' }
        ]
      },
      { text: '在线工具', link: '/efficiency/online-tools' },
      { text: 'AI 工具', link: '/efficiency/bookmark-scripts' }
    ],
    activeMatch: '^/efficiency'
  },
  {
    text: 'wing',
    link: '/wing'
  }
]
