# VStats 主题

为 [VStats](https://github.com/user/vstats) 服务器监控面板创建自定义主题。

## 快速开始

1. Fork 这个仓库
2. 修改 `template/theme.json` 和 `template/theme.css`
3. 用户可以通过 `你的用户名/仓库名` 安装你的主题

## 目录结构

```
vstats-theme/
├── themes/             # 官方主题集合
│   ├── daylight/       # 明亮主题
│   ├── cyberpunk/      # 赛博朋克
│   ├── terminal/       # 黑客终端
│   ├── glassmorphism/  # 毛玻璃
│   ├── neumorphism/    # 新拟态
│   ├── brutalist/      # 野兽派
│   ├── minimal/        # 极简禅意
│   ├── retro/          # 复古风
│   ├── tape/           # 磁带未来
│   ├── handdrawn/      # 手绘风
│   ├── memphis/        # 孟菲斯
│   ├── skeuomorphic/   # 拟物风
│   ├── aesthetic/      # 少女审美
│   ├── magazine/       # 杂志排版
│   └── industrial/     # 工业科技
├── template/           # 创建新主题的模板
│   ├── theme.json      # 主题清单 (必需)
│   ├── theme.css       # 主题样式 (必需)
│   └── README.md       # 模板文档
└── docs/               # 开发文档
    ├── THEME-DEVELOPMENT.md     # 英文指南
    └── THEME-DEVELOPMENT.zh.md  # 中文指南
```

## 可用主题

| 主题 | 风格 | 模式 | 安装命令 |
|------|------|------|----------|
| 晴空日光 | Flat | 浅色 | `vstats-theme/themes/daylight` |
| 赛博朋克 | Brutalist | 深色 | `vstats-theme/themes/cyberpunk` |
| 黑客终端 | Minimal | 深色 | `vstats-theme/themes/terminal` |
| 毛玻璃 | Glass | 深色 | `vstats-theme/themes/glassmorphism` |
| 新拟态 | Neumorphic | 浅色 | `vstats-theme/themes/neumorphism` |
| 野兽派 | Brutalist | 浅色 | `vstats-theme/themes/brutalist` |
| 极简禅意 | Minimal | 浅色 | `vstats-theme/themes/minimal` |
| 复古风 | Flat | 浅色 | `vstats-theme/themes/retro` |
| 磁带未来 | Flat | 深色 | `vstats-theme/themes/tape` |
| 手绘风 | Flat | 浅色 | `vstats-theme/themes/handdrawn` |
| 孟菲斯 | Flat | 浅色 | `vstats-theme/themes/memphis` |
| 拟物风 | Neumorphic | 浅色 | `vstats-theme/themes/skeuomorphic` |
| 少女审美 | Glass | 浅色 | `vstats-theme/themes/aesthetic` |
| 杂志排版 | Flat | 浅色 | `vstats-theme/themes/magazine` |
| 工业科技 | Brutalist | 深色 | `vstats-theme/themes/industrial` |

## 创建你的主题

### 1. 配置 theme.json

编辑 `template/theme.json` 定义你的主题：

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

### 2. 编写 theme.css

所有 CSS 规则必须限定在 `.theme-{你的主题id}` 下：

```css
.theme-my-awesome-theme {
  --theme-accent: #ff6b6b;
  --bg-primary: #0a0a0f;
  --text-primary: #f8fafc;
  /* ... */
}

.theme-my-awesome-theme .vps-card {
  background: var(--bg-card);
  /* ... */
}
```

### 3. 添加预览图片 (可选)

添加 `preview.png` 截图用于主题展示。

## 安装方式

用户可以在 VStats 中安装你的主题：

1. 进入 **设置** → **主题** → **安装主题**
2. 输入：`你的用户名/仓库名`
3. 点击 **安装**

### 安装格式

| 格式 | 示例 |
|------|------|
| 仓库根目录 | `username/repo` |
| 子目录 | `username/repo/themes/my-theme` |
| 指定版本 | `username/repo@v1.0.0` |
| 指定分支 | `username/repo@develop` |

## 文档

- [Theme Development Guide (English)](docs/THEME-DEVELOPMENT.md)
- [主题开发指南 (中文)](docs/THEME-DEVELOPMENT.zh.md)

## 风格类型

| 风格 | 说明 |
|------|------|
| `flat` | 纯色，最小阴影 |
| `glass` | 毛玻璃效果 |
| `neumorphic` | 新拟态，柔和阴影 |
| `brutalist` | 野兽派，硬边设计 |
| `minimal` | 极简主义 |

## 许可证

MIT

