# devdocs-js

ReactUI 及 gulp 实现 nodejs 版本 Devdocs。仅供学习娱乐使用。

## 目录结构

项目文件放在 `app` 目录下：

```
-app
├── humans.txt
├── i              // 图片
├── index.html     // 入口 HTML
├── js             // JS
├── less           // Less
├── manifest.json
├── manifest.webapp
└── robots.txt
-server
├── server.js
└── routes.js
```

## 使用说明

### 全局安装 gulp：

```
npm install gulp -g
```

### 安装开发依赖

1. 克隆或下载本项目；
2. 进入项目目录，执行 `npm install`；

### 开发

```
gulp dev
```

### 生产环境构建

设置 Node 环境变量为 `production` 后，HTML 中引用的 CSS 和 JS 会替换为 minify 的版本。

```
NODE_ENV=production gulp
```

### 发布

```
gulp publish
```
