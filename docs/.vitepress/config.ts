import { loadEnv } from 'vite'
import { defineConfig } from 'vitepress'
import { nav } from './configs'

const env = loadEnv('', process.cwd(), '')
const umamiScriptUrl = env.UMAMI_SCRIPT_URL || 'https://cloud.umami.is/script.js'
const umamiWebsiteId = env.UMAMI_WEBSITE_ID

export default defineConfig({
  title: 'wing的小盒子',
  description: '记录前端成长、源码阅读、效率工具与生活观察',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ...(umamiScriptUrl && umamiWebsiteId
      ? [[
          'script',
          {
            defer: '',
            src: umamiScriptUrl,
            'data-website-id': umamiWebsiteId
          }
        ] as const]
      : [])
  ],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    nav,

    sidebar: {
      '/fe/': [
        {
          text: '前端物语',
          items: [
            { text: '栏目总览', link: '/fe/' },
            { text: 'JavaScript 基础知识', link: '/fe/javascript/types' },
            { text: 'CSS 理论知识点', link: '/fe/css/' },
            { text: 'ES6 常用知识', link: '/fe/es6/' },
            { text: 'TypeScript 基础知识', link: '/fe/typescript/base' },
            { text: 'TypeScript 类型体操', link: '/fe/typescript/challenges' },
            { text: 'Webpack', link: '/fe/webpack/' },
            { text: '浏览器相关知识', link: '/fe/browser/' },
            { text: '编程题', link: '/fe/coding/' },
            { text: '前端算法', link: '/fe/alg/' }
          ]
        }
      ],
      '/analysis/': [
        {
          text: '源码阅读',
          items: [
            { text: '栏目总览', link: '/analysis/' },
            { text: '响应式原理', link: '/analysis/vue/1' },
            { text: 'VNode节点', link: '/analysis/vue/2' },
            { text: 'VirtualDOM与diff', link: '/analysis/vue/3' },
            { text: 'Vue.js异步更新DOM策略及nextTick', link: '/analysis/vue/4' },
            { text: '依赖收集', link: '/analysis/vue/5' },
            { text: 'Vue事件机制', link: '/analysis/vue/6' },
            { text: 'Vue组件间通信', link: '/analysis/vue/7' },
            { text: 'Vuex源码解析', link: '/analysis/vue/8' }
          ]
        }
      ],
      '/movie-life/': [
        {
          text: '电影人生',
          items: [
            { text: '栏目总览', link: '/movie-life/' },
            { text: '栏目说明', link: '/movie-life/about-this-column' },
            { text: '成长与选择', link: '/movie-life/growth-and-choice' },
            { text: '亲密关系', link: '/movie-life/intimacy-and-distance' },
            { text: '孤独与陪伴', link: '/movie-life/loneliness-and-company' },
            { text: '告别与和解', link: '/movie-life/farewell-and-reconciliation' },
            { text: '海边的曼彻斯特', link: '/movie-life/manchester-by-the-sea' },
            { text: '花束般的恋爱', link: '/movie-life/we-made-a-beautiful-bouquet' },
            { text: '心灵奇旅', link: '/movie-life/soul' },
            { text: '2026 观影记录', link: '/movie-life/annual-2026' }
          ]
        }
      ],
      '/daily-notes/': [
        {
          text: '笔记',
          items: [{ text: '日常笔记', link: '/daily-notes/' }]
        },
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
      '/pit/': [
        {
          text: '笔记',
          items: [{ text: '日常笔记', link: '/daily-notes/' }]
        },
        {
          text: '踩坑记录',
          items: [
            { text: '踩坑索引', link: '/pit/' },
            { text: 'npm 踩坑记录', link: '/pit/npm' },
            { text: '第三方库踩坑记录', link: '/pit/library' },
            { text: 'PC 踩坑记录', link: '/pit/pc' },
            { text: 'H5 踩坑记录', link: '/pit/h5' },
            { text: '微信开发踩坑记录', link: '/pit/wechat' }
          ]
        }
      ],
      '/efficiency/': [
        {
          text: '提效工具',
          items: [
            { text: '栏目总览', link: '/efficiency/' },
            { text: '多平台软件', link: '/efficiency/software/cross-platform' },
            { text: 'Mac 平台', link: '/efficiency/software/mac' },
            { text: 'Windows 平台', link: '/efficiency/software/windows' },
            { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
            { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
            { text: '在线工具', link: '/efficiency/online-tools' },
            { text: '书签脚本', link: '/efficiency/bookmark-scripts' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangwenyin/ww-blogs' }
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: '转载请注明原文出处，欢迎交流与指正。',
      copyright: 'Copyright © 2019-present wing',
    },
  }
})
