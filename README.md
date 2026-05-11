# wingLittleBox

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

建议使用 Node.js 20 及以上版本，并先安装依赖：

```bash
npm install
```

如需启用首页 Umami 访问统计，可先基于示例环境变量创建本地配置：

```bash
cp .env.example .env
```

然后填入以下变量：

| 变量名 | 作用 | 示例 |
|---|---|---|
| `UMAMI_WEBSITE_ID` | Umami 中的网站 ID | `your-website-id` |
| `UMAMI_API_KEY` | 用于构建阶段拉取统计数据的 API Key | `your-api-key` |
| `UMAMI_SCRIPT_URL` | Umami 前端统计脚本地址，可选 | `https://cloud.umami.is/script.js` |
| `UMAMI_API_URL` | Umami API 基地址，可选 | `https://api.umami.is/v1` |
| `SITE_URL` | 站点正式访问地址，用于生成 sitemap/robots 和站点级 SEO 元信息 | `https://your-domain.com` |

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

说明：

| 场景 | 行为 |
|---|---|
| 已配置 Umami 环境变量 | 构建前会同步首页页脚所需的累计访问/访客统计 |
| 未配置 Umami 环境变量 | 统计同步会自动跳过，首页不显示统计文案，但构建仍会成功 |
| 豆瓣热映同步失败 | 会保留上一次成功快照；若没有历史快照，则写入空数据兜底，构建仍会成功 |

## Vercel 部署说明

项目已补充面向 Vercel 的基础部署配置：

| 文件 | 作用 |
|---|---|
| `vercel.json` | 固定构建命令、输出目录，并为 `/assets/*`、`/data/*` 设置更合理的缓存头 |
| `.nvmrc` | 固定本地与云端推荐 Node 主版本为 `20` |
| `package.json#engines` | 约束 Node 运行时版本，降低构建环境漂移 |
| `scripts/generate-seo-files.mjs` | 基于 `SITE_URL` 自动生成 `robots.txt` 与 `sitemap.xml` |

当前部署策略说明：

| 项目 | 策略 |
|---|---|
| 构建命令 | `npm run docs:build` |
| 输出目录 | `docs/.vitepress/dist` |
| JSON 数据缓存 | `max-age=0, must-revalidate`，保证站点统计和电影数据更新更及时 |
| VitePress 哈希资源缓存 | `max-age=31536000, immutable`，提升静态资源缓存命中率 |
| sitemap/robots | 构建前自动生成；未配置 `SITE_URL` 时只生成基础 `robots.txt`，跳过错误 sitemap |

SEO 相关说明：

| 项目 | 行为 |
|---|---|
| `SITE_URL` 已配置 | 生成 `sitemap.xml`，并注入站点级 `og:url` / `twitter:url` |
| `SITE_URL` 未配置 | 构建仍成功，但不会生成绝对地址错误的 sitemap |

## 内容与配置说明

- 站点主内容位于 `docs/`
- VitePress 配置位于 `docs/.vitepress/config.ts`
- 导航配置位于 `docs/.vitepress/configs/nav.ts`
- 自定义主题入口位于 `docs/.vitepress/theme/index.ts`
- 公共静态资源位于 `docs/public/`
- Umami 统计同步脚本位于 `scripts/fetch-umami-stats.mjs`

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
