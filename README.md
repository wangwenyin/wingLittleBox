# ww-blogs

一个基于 `VitePress` 搭建的个人博客与知识库项目，用来沉淀前端学习、源码阅读、效率工具和生活类内容。站点内容主要位于 `docs/` 目录。

## 项目特点

- 使用 `VitePress` 构建静态文档站点
- 内容按主题组织，便于持续扩展
- 已包含自定义导航、主题组件与静态资源
- 适合作为个人博客、知识库或学习笔记站点的基础模板

## 项目结构

```text
.
├─ docs/                      # 文档与站点内容
│  ├─ .vitepress/            # VitePress 配置、主题与缓存
│  ├─ analysis/              # 源码分析文章
│  ├─ efficiency/            # 效率工具/软件整理
│  ├─ movie-life/            # 自定义页面
│  ├─ public/                # 静态资源
│  └─ index.md               # 站点首页
├─ package.json
└─ package-lock.json
```

## 技术栈

- `VitePress`
- `Vue 3`
- `Node.js`

## 本地开发

建议使用较新的 Node.js 环境，并先安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

本地预览构建结果：

```bash
npm run docs:preview
```

## 内容与配置说明

- 站点主内容位于 `docs/`
- VitePress 配置位于 `docs/.vitepress/config.ts`
- 导航配置位于 `docs/.vitepress/configs/nav.ts`
- 自定义主题入口位于 `docs/.vitepress/theme/index.ts`
- 公共静态资源位于 `docs/public/`

## 当前内容概览

- `docs/index.md`：站点首页
- `docs/analysis/vue/`：Vue 源码阅读笔记
- `docs/efficiency/software/windows.md`：Windows 平台效率工具整理
- `docs/movie-life/index.md`：自定义页面示例

## 本次整理说明

- 已补充 `.gitignore`，忽略 `node_modules/`、VitePress 缓存和常见本地环境文件
- 已优化首页默认占位文案，使其更贴合当前博客定位
- 已调整站点描述、快捷入口和仓库链接
- 已检查此前看到的“乱码”现象，确认主要是终端显示编码导致，源文件本身为 UTF-8 内容

## 建议后续优化

- 清理不再使用的默认示例页面
- 逐步补齐导航中尚未落地的页面路径
- 增加部署说明，例如 GitHub Pages / Vercel / Netlify
- 为 `movie-life` 等自定义页面补充真实内容
