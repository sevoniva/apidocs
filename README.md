# 金润永信 API 文档

基于 [Fumadocs](https://fumadocs.vercel.app) 构建的 API 文档站点。

## 技术栈

- Next.js 15 + React 19
- TypeScript
- Tailwind CSS
- Fumadocs UI

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000/docs

## 构建

```bash
npm run build
```

输出到 `out/` 目录，静态部署。

## 目录结构

```
content/docs/          # 文档内容（MDX）
├── index.mdx          # 快速开始
├── getting-started.mdx
├── faq.mdx
├── security.mdx
├── api/               # API 接入文档
├── integration/       # 客户端配置总览
└── clients/           # 各客户端分步配置
app/docs/              # 文档路由
app/(home)/            # 首页
components/mdx.tsx     # MDX 组件注册
public/                # 静态资源（logo、icon）
```

## 添加新文档

1. 在 `content/docs/` 下创建 `.mdx` 文件
2. 如需新分类，在对应目录创建 `meta.json`
3. 可用组件：`Cards`、`Card`、`Steps`、`Step`、`Callout`、`Tabs`、`Tab`
