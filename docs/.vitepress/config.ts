import { defineConfig } from 'vitepress'
import { nav } from './configs'

export default defineConfig({
  title: "wing的小盒子",
  description: "记录前端成长、源码阅读、效率工具与生活观察",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/favicon.ico'}]
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

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '首页', link: '/' },
          { text: 'Vue 源码阅读', link: '/analysis/vue/1' },
          { text: 'Windows 平台', link: '/efficiency/software/windows' }
        ]
      }
    ],

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
