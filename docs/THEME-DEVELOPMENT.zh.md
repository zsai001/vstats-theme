# VStats 主题开发指南

本指南介绍如何为 VStats 创建可从 GitHub 或其他来源安装的自定义主题。

## 目录

- [快速开始](#快速开始)
- [主题结构](#主题结构)
- [主题清单 (theme.json)](#主题清单-themejson)
- [主题样式 (theme.css)](#主题样式-themecss)
- [CSS 变量参考](#css-变量参考)
- [组件样式](#组件样式)
- [发布主题](#发布主题)
- [安装方式](#安装方式)
- [示例](#示例)

## 快速开始

1. 在 GitHub 上创建一个新仓库
2. 添加 `theme.json` 清单文件
3. 添加 `theme.css` 样式文件
4. 用户可通过 `你的用户名/仓库名` 安装

## 主题结构

VStats 主题至少包含两个文件：

```
my-theme/
├── theme.json      # 主题清单 (必需)
├── theme.css       # 主题样式 (必需)
├── assets/         # 资源目录 (可选)
│   ├── fonts/
│   └── images/
└── README.md       # 说明文档 (推荐)
```

## 主题清单 (theme.json)

`theme.json` 文件描述主题及其属性。

### 必填字段

```json
{
  "id": "my-awesome-theme",
  "name": "My Awesome Theme",
  "nameZh": "我的主题",
  "version": "1.0.0",
  "author": "你的用户名",
  "description": "A beautiful theme for VStats",
  "descriptionZh": "一个漂亮的 VStats 主题",
  "isDark": true,
  "style": "glass",
  "preview": {
    "primary": "#0a0a0f",
    "secondary": "#1a1a2e",
    "accent": "#ff6b6b",
    "background": "#0a0a0f"
  },
  "fonts": {
    "heading": "\"Inter\", sans-serif",
    "body": "\"Inter\", system-ui, sans-serif",
    "mono": "\"JetBrains Mono\", monospace"
  },
  "borderRadius": "12px",
  "cardStyle": "glass"
}
```

### 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | string | 唯一标识符（小写字母、数字、连字符，如 `my-theme`）|
| `name` | string | 显示名称（英文）|
| `nameZh` | string | 显示名称（中文）|
| `version` | string | 语义化版本号（如 `1.0.0`）|
| `author` | string | 作者名称或 GitHub 用户名 |
| `description` | string | 简短描述（英文）|
| `descriptionZh` | string | 简短描述（中文）|
| `isDark` | boolean | 是否为深色主题 |
| `style` | string | UI 风格：`flat`、`glass`、`neumorphic`、`brutalist`、`minimal` |
| `preview` | object | 主题选择器中的预览颜色 |
| `fonts` | object | 不同文本类型的字体 |
| `borderRadius` | string | 默认圆角大小 |
| `cardStyle` | string | 卡片样式标识符 |

### 可选字段

```json
{
  "license": "MIT",
  "homepage": "https://github.com/user/my-theme",
  "repository": "https://github.com/user/my-theme",
  "keywords": ["dark", "neon", "cyberpunk"],
  "minVersion": "1.0.0",
  "cssFile": "theme.css",
  "assetsDir": "assets/",
  "previewImage": "preview.png"
}
```

### 风格类型

| 风格 | 说明 |
|------|------|
| `flat` | 纯色，最小阴影 |
| `glass` | 毛玻璃效果 |
| `neumorphic` | 新拟态，柔和阴影 |
| `brutalist` | 野兽派，硬边设计 |
| `minimal` | 极简主义 |

## 主题样式 (theme.css)

你的 CSS 文件应该将样式限定在你的主题类下。

### 基本结构

```css
/* ========================================
   主题: 我的主题
   作者: 你的用户名
   ======================================== */

/* 主题类 - 所有样式必须限定在此类下 */
.theme-my-awesome-theme {
  /* CSS 变量 */
  --theme-accent: #ff6b6b;
  --theme-accent-hover: #ff5252;
  --theme-accent-soft: rgba(255, 107, 107, 0.15);
  --theme-glow: rgba(255, 107, 107, 0.4);
  
  --bg-primary: #0a0a0f;
  --bg-secondary: rgba(26, 26, 46, 0.85);
  --bg-card: rgba(26, 26, 46, 0.7);
  --bg-input: rgba(255, 255, 255, 0.08);
  
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-tertiary: #94a3b8;
  --text-muted: #64748b;
  
  --border-primary: rgba(255, 107, 107, 0.2);
  --border-secondary: rgba(255, 107, 107, 0.3);
  
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.4);
  
  color-scheme: dark;
}

/* 卡片样式 */
.theme-my-awesome-theme .vps-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: 12px;
  box-shadow: var(--shadow-card);
}

.theme-my-awesome-theme .vps-card:hover {
  border-color: var(--border-secondary);
  transform: translateY(-4px);
}

/* 更多样式... */
```

### 重要：类命名

**始终将样式限定在 `.theme-{你的主题id}` 下**

CSS 类中的主题 ID 必须与 `theme.json` 中的 `id` 字段匹配：

```json
{ "id": "my-awesome-theme" }
```
```css
.theme-my-awesome-theme { ... }
```

## CSS 变量参考

### 核心变量

```css
/* 强调色 */
--theme-accent           /* 主强调色 */
--theme-accent-hover     /* 悬停状态 */
--theme-accent-soft      /* 低透明度 */
--theme-glow             /* 发光/阴影色 */

/* 背景色 */
--bg-primary             /* 页面背景 */
--bg-secondary           /* 次级背景 */
--bg-secondary-hover     /* 悬停状态 */
--bg-card                /* 卡片背景 */
--bg-input               /* 输入框背景 */

/* 文字颜色 */
--text-primary           /* 主要文字 */
--text-secondary         /* 次要文字 */
--text-tertiary          /* 第三级文字 */
--text-muted             /* 禁用/静音文字 */

/* 边框 */
--border-primary         /* 默认边框 */
--border-secondary       /* 强调边框 */
--border-hover           /* 悬停边框 */

/* 阴影 */
--shadow-card            /* 卡片阴影 */
```

### 字体变量

这些由清单文件设置：

```css
--theme-font-heading     /* 标题字体 */
--theme-font-body        /* 正文字体 */
--theme-font-mono        /* 等宽字体 */
--theme-border-radius    /* 默认圆角 */
```

## 组件样式

### 服务器卡片

```css
.theme-my-theme .vps-card {
  /* 主卡片容器 */
}

.theme-my-theme .vps-card-title--dark {
  /* 深色模式下的卡片标题 */
}

.theme-my-theme .vps-card:hover {
  /* 卡片悬停状态 */
}
```

### 概览卡片（仪表板统计）

```css
.theme-my-theme .vps-overview-card--online-my-theme {
  /* 在线服务器卡片 */
}

.theme-my-theme .vps-overview-card--offline-my-theme {
  /* 离线服务器卡片 */
}

.theme-my-theme .vps-overview-card--download-my-theme {
  /* 下载统计卡片 */
}

.theme-my-theme .vps-overview-card--upload-my-theme {
  /* 上传统计卡片 */
}
```

### 进度条

```css
.theme-my-theme .vps-resource-bar-track {
  /* 进度条轨道 */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.theme-my-theme .vps-resource-bar-fill {
  /* 进度条填充 */
  background: linear-gradient(90deg, #ff6b6b, #ff8787);
  box-shadow: 0 0 10px rgba(255, 107, 107, 0.3);
}
```

### 按钮

```css
.theme-my-theme .vps-btn,
.theme-my-theme button {
  /* 默认按钮 */
}

.theme-my-theme .vps-btn-primary,
.theme-my-theme button[type="submit"] {
  /* 主按钮/提交按钮 */
}
```

### 表单元素

```css
.theme-my-theme input,
.theme-my-theme select,
.theme-my-theme textarea {
  /* 输入字段 */
}

.theme-my-theme input:focus {
  /* 聚焦状态 */
}
```

## 发布主题

### GitHub 仓库结构

```
your-theme-repo/
├── theme.json
├── theme.css
├── preview.png          # 主题截图
├── README.md
└── LICENSE
```

### 版本管理

使用语义化版本：

- `1.0.0` - 首次发布
- `1.0.1` - 问题修复
- `1.1.0` - 新功能（向后兼容）
- `2.0.0` - 破坏性更改

创建 Git 标签：

```bash
git tag v1.0.0
git push origin v1.0.0
```

用户可以安装指定版本：

```
你的用户名/仓库名@v1.0.0
```

## 安装方式

### 从 GitHub 安装

用户在主题管理器中输入以下格式之一：

| 格式 | 示例 |
|------|------|
| 仓库根目录 | `username/repo` |
| 子目录 | `username/repo/themes/my-theme` |
| 指定版本 | `username/repo@v1.0.0` |
| 指定分支 | `username/repo@develop` |

### 从 URL 安装

直接指向 `theme.json` 的 URL：

```
https://example.com/themes/my-theme/theme.json
```

## 示例

### 极简深色主题

```json
{
  "id": "midnight-minimal",
  "name": "Midnight Minimal",
  "nameZh": "午夜极简",
  "version": "1.0.0",
  "author": "example",
  "description": "A minimal dark theme",
  "descriptionZh": "极简深色主题",
  "isDark": true,
  "style": "minimal",
  "preview": {
    "primary": "#0f0f0f",
    "secondary": "#1a1a1a",
    "accent": "#ffffff",
    "background": "#0f0f0f"
  },
  "fonts": {
    "heading": "\"Inter\", sans-serif",
    "body": "\"Inter\", sans-serif",
    "mono": "\"SF Mono\", monospace"
  },
  "borderRadius": "4px",
  "cardStyle": "minimal"
}
```

### 霓虹赛博朋克主题

```json
{
  "id": "neon-nights",
  "name": "Neon Nights",
  "nameZh": "霓虹之夜",
  "version": "1.0.0",
  "author": "example",
  "description": "Vibrant neon colors on dark background",
  "descriptionZh": "深色背景上的霓虹色彩",
  "isDark": true,
  "style": "brutalist",
  "preview": {
    "primary": "#0a0015",
    "secondary": "#1a0030",
    "accent": "#ff00ff",
    "background": "#0a0015"
  },
  "fonts": {
    "heading": "\"Orbitron\", sans-serif",
    "body": "\"Rajdhani\", sans-serif",
    "mono": "\"Share Tech Mono\", monospace"
  },
  "borderRadius": "0px",
  "cardStyle": "neon"
}
```

## 提示与最佳实践

1. **充分测试** - 使用不同数据状态测试主题（在线/离线服务器，高/低资源使用率）

2. **支持所有状态** - 确保悬停、激活、聚焦和禁用状态都美观

3. **使用 CSS 变量** - 方便用户自定义

4. **考虑无障碍** - 确保足够的颜色对比度

5. **保持文件小巧** - 压缩 CSS 和优化图片

6. **文档完善** - 包含截图和安装说明

7. **语义化版本** - 便于用户追踪更新

8. **跨浏览器测试** - Chrome、Firefox、Safari、Edge

## 故障排除

### 主题无法加载？

- 检查 `theme.json` 是否为有效 JSON
- 确保 `id` 字段与 CSS 类名匹配
- 验证仓库是否公开

### 样式不生效？

- 确保所有 CSS 规则都限定在 `.theme-{你的id}` 下
- 检查浏览器开发工具中的 CSS 特异性问题
- 验证 CSS 语法是否正确

### 更新不显示？

- 清除浏览器缓存
- 尝试重新安装主题
- 检查 `theme.json` 中的版本号是否已更新

## 支持

如需主题开发帮助：

- 在 VStats 仓库中提交 Issue
- 加入社区 Discord
- 参考现有主题示例

---

祝你主题制作愉快！🎨

