# VStats Theme

Create custom themes for [VStats](https://github.com/user/vstats) server monitoring dashboard.

## Quick Start

1. Fork this repository
2. Modify `template/theme.json` and `template/theme.css`
3. Users can install your theme via: `your-username/your-repo`

## Directory Structure

```
vstats-theme/
├── themes/             # Official themes collection
│   ├── daylight/       # Light theme with soft shadows
│   ├── cyberpunk/      # Neon lights, glitch effects
│   ├── terminal/       # Retro terminal with scanlines
│   ├── glassmorphism/  # Frosted glass effects
│   ├── neumorphism/    # Soft UI, embossed elements
│   ├── brutalist/      # Bold, raw design
│   ├── minimal/        # Maximum whitespace
│   ├── retro/          # Nostalgic warm colors
│   ├── tape/           # Cassette aesthetics
│   ├── handdrawn/      # Sketchy, comic style
│   ├── memphis/        # Geometric 80s vibes
│   ├── skeuomorphic/   # Realistic textures
│   ├── aesthetic/      # Soft pastels, dreamy
│   ├── magazine/       # Bold typography
│   └── industrial/     # Rugged, metallic
├── template/           # Theme template for creating new themes
│   ├── theme.json      # Theme manifest (required)
│   ├── theme.css       # Theme stylesheet (required)
│   └── README.md       # Template documentation
└── docs/               # Development documentation
    ├── THEME-DEVELOPMENT.md     # English guide
    └── THEME-DEVELOPMENT.zh.md  # Chinese guide
```

## Available Themes

| Theme | Style | Mode | Install |
|-------|-------|------|---------|
| Daylight | Flat | Light | `vstats-theme/themes/daylight` |
| Cyberpunk | Brutalist | Dark | `vstats-theme/themes/cyberpunk` |
| Terminal | Minimal | Dark | `vstats-theme/themes/terminal` |
| Glassmorphism | Glass | Dark | `vstats-theme/themes/glassmorphism` |
| Neumorphism | Neumorphic | Light | `vstats-theme/themes/neumorphism` |
| Brutalist | Brutalist | Light | `vstats-theme/themes/brutalist` |
| Minimal | Minimal | Light | `vstats-theme/themes/minimal` |
| Retro | Flat | Light | `vstats-theme/themes/retro` |
| Tape | Flat | Dark | `vstats-theme/themes/tape` |
| Hand-drawn | Flat | Light | `vstats-theme/themes/handdrawn` |
| Memphis | Flat | Light | `vstats-theme/themes/memphis` |
| Skeuomorphic | Neumorphic | Light | `vstats-theme/themes/skeuomorphic` |
| Aesthetic | Glass | Light | `vstats-theme/themes/aesthetic` |
| Magazine | Flat | Light | `vstats-theme/themes/magazine` |
| Industrial | Brutalist | Dark | `vstats-theme/themes/industrial` |

## Creating Your Theme

### 1. Configure theme.json

Edit `template/theme.json` to define your theme:

```json
{
  "id": "my-awesome-theme",
  "name": "My Awesome Theme",
  "version": "1.0.0",
  "author": "your-username",
  "description": "A beautiful theme for VStats",
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

### 2. Write theme.css

All CSS rules must be scoped to `.theme-{your-theme-id}`:

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

### 3. Add Preview Image (Optional)

Add a `preview.png` screenshot for the theme gallery.

## Installation

Users can install your theme in VStats:

1. Go to **Settings** → **Themes** → **Install Theme**
2. Enter: `your-username/your-repo`
3. Click **Install**

### Installation Formats

| Format | Example |
|--------|---------|
| Repository root | `username/repo` |
| Subdirectory | `username/repo/themes/my-theme` |
| Specific version | `username/repo@v1.0.0` |
| Branch | `username/repo@develop` |

## Documentation

- [Theme Development Guide (English)](docs/THEME-DEVELOPMENT.md)
- [主题开发指南 (中文)](docs/THEME-DEVELOPMENT.zh.md)

## Style Types

| Style | Description |
|-------|-------------|
| `flat` | Solid colors, minimal shadows |
| `glass` | Glassmorphism with blur effects |
| `neumorphic` | Soft shadows, embossed elements |
| `brutalist` | Bold, raw design with hard edges |
| `minimal` | Maximum whitespace, minimal elements |

## License

MIT

