# agent-video · 用 coding agent 做视频 · 交互图解站

一个零依赖纯静态的交互式学习网站：上篇「看懂一条视频」（三轴体系 / 景别 / 风格 / 讲得清楚），下篇「让 agent 按图纸生产」（工作流 / 人工闸门 / 渐进式生成流程 / 片段过渡 / 素材成本 / 工具格局 / 混合管线），共 11 章，每章配可动手调的演示。

## 在线访问

- GitHub Pages：<https://coconilu.github.io/agent-video/>
- 备用镜像：<https://display.ai-workspace.top/agent-video/>

## 本地预览

无构建、无依赖：直接用浏览器打开 `index.html` 即可（`file://` 协议可正常阅读），或任意静态服务器：

```bash
npx serve .
```

## 目录结构

```text
index.html          首页（学习路径 + 核心结论）
chapters/           11 个章节页（01-anatomy … 11-pipeline）
assets/css/         全站样式（深色工程控制台风）
assets/js/          共享交互（完成标记、提示词复制等）
DESIGN.md           设计契约（配色令牌、章节模板规范）
```

## 内容说明

- 全中文，术语首次出现给白话解释
- 每章含 canvas/交互演示，所有 JS 为零依赖手写
- 第 7 章附六轮提示词模板，可直接拷贝使用
