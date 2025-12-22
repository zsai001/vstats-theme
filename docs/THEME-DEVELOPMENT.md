# VStats Theme Development Guide

This guide explains how to create custom themes for VStats that can be installed from GitHub or other sources.

## Table of Contents

- [Quick Start](#quick-start)
- [Theme Structure](#theme-structure)
- [Theme Manifest (theme.json)](#theme-manifest-themejson)
- [Theme CSS (theme.css)](#theme-css-themecss)
- [CSS Variables Reference](#css-variables-reference)
- [Component Styling](#component-styling)
- [Publishing Your Theme](#publishing-your-theme)
- [Installation](#installation)
- [Examples](#examples)

## Quick Start

1. Create a new GitHub repository for your theme
2. Add `theme.json` manifest file
3. Add `theme.css` stylesheet
4. Users can install with: `your-username/your-repo`

## Theme Structure

A VStats theme consists of at minimum two files:

```
my-theme/
├── theme.json      # Theme manifest (required)
├── theme.css       # Theme stylesheet (required)
├── assets/         # Optional assets directory
│   ├── fonts/
│   └── images/
└── README.md       # Documentation (recommended)
```

## Theme Manifest (theme.json)

The `theme.json` file describes your theme and its properties.

### Required Fields

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

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (lowercase, hyphens only, e.g., `my-theme`) |
| `name` | string | Display name |
| `version` | string | Semantic version (e.g., `1.0.0`) |
| `author` | string | Author name or GitHub username |
| `description` | string | Brief description of the theme |
| `isDark` | boolean | Whether this is a dark theme |
| `style` | string | UI style: `flat`, `glass`, `neumorphic`, `brutalist`, `minimal` |
| `preview` | object | Preview colors for theme selector |
| `fonts` | object | Font families for different text types |
| `borderRadius` | string | Default border radius |
| `cardStyle` | string | Card style identifier |

### Optional Fields

```json
{
  "nameZh": "我的主题",
  "descriptionZh": "一个漂亮的 VStats 主题",
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

### Style Types

| Style | Description |
|-------|-------------|
| `flat` | Solid colors, minimal shadows |
| `glass` | Glassmorphism with blur effects |
| `neumorphic` | Soft shadows, embossed elements |
| `brutalist` | Bold, raw design with hard edges |
| `minimal` | Maximum whitespace, minimal elements |

## Theme CSS (theme.css)

Your CSS file should define styles scoped to your theme class.

### Basic Structure

```css
/* ========================================
   Theme: My Awesome Theme
   Author: your-username
   ======================================== */

/* Theme class - all styles must be scoped to this */
.theme-my-awesome-theme {
  /* CSS Variables */
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

/* Card styles */
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

/* More styles... */
```

### Important: Class Naming

**Always scope your styles to `.theme-{your-theme-id}`**

The theme ID in your CSS class must match the `id` field in your `theme.json`:

```json
{ "id": "my-awesome-theme" }
```
```css
.theme-my-awesome-theme { ... }
```

## CSS Variables Reference

### Core Variables

```css
/* Accent Colors */
--theme-accent           /* Primary accent color */
--theme-accent-hover     /* Accent hover state */
--theme-accent-soft      /* Accent with low opacity */
--theme-glow             /* Glow/shadow color */

/* Backgrounds */
--bg-primary             /* Page background */
--bg-secondary           /* Secondary background */
--bg-secondary-hover     /* Hover state */
--bg-card                /* Card background */
--bg-input               /* Input field background */

/* Text Colors */
--text-primary           /* Main text */
--text-secondary         /* Secondary text */
--text-tertiary          /* Tertiary text */
--text-muted             /* Muted/disabled text */

/* Borders */
--border-primary         /* Default border */
--border-secondary       /* Stronger border */
--border-hover           /* Hover border */

/* Shadows */
--shadow-card            /* Card shadow */

/* Page Background */
--page-bg-dark           /* Full page gradient for dark themes */

/* Card Specific */
--card-bg-dark           /* Dark theme card bg */
--card-border-dark       /* Dark theme card border */
--card-shadow-dark       /* Dark theme card shadow */
```

### Font Variables

These are set from your manifest:

```css
--theme-font-heading     /* Heading font family */
--theme-font-body        /* Body text font family */
--theme-font-mono        /* Monospace font family */
--theme-border-radius    /* Default border radius */
```

## Component Styling

### Server Cards

```css
.theme-my-theme .vps-card {
  /* Main card container */
}

.theme-my-theme .vps-card-title--dark {
  /* Card title in dark mode */
}

.theme-my-theme .vps-card:hover {
  /* Card hover state */
}
```

### Overview Cards (Dashboard Stats)

```css
.theme-my-theme .vps-overview-card--online-my-theme {
  /* Online servers card */
}

.theme-my-theme .vps-overview-card--offline-my-theme {
  /* Offline servers card */
}

.theme-my-theme .vps-overview-card--download-my-theme {
  /* Download stats card */
}

.theme-my-theme .vps-overview-card--upload-my-theme {
  /* Upload stats card */
}

.theme-my-theme .vps-overview-label--online { color: #10b981; }
.theme-my-theme .vps-overview-label--offline { color: #ef4444; }
.theme-my-theme .vps-overview-label--download { color: #3b82f6; }
.theme-my-theme .vps-overview-label--upload { color: #10b981; }
```

### Compact Table View

```css
.theme-my-theme .vps-compact-header--my-theme {
  /* Table header */
}

.theme-my-theme .vps-compact-row--my-theme {
  /* Table row */
}

.theme-my-theme .vps-compact-row--my-theme:hover {
  /* Row hover */
}

.theme-my-theme .vps-compact-node-name--my-theme {
  /* Server name */
}

.theme-my-theme .vps-compact-node-location--my-theme {
  /* Location text */
}

.theme-my-theme .vps-compact-meter--my-theme {
  /* Progress meter */
}
```

### Progress Bars

```css
.theme-my-theme .vps-resource-bar-track {
  /* Progress bar track */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.theme-my-theme .vps-resource-bar-fill {
  /* Progress bar fill */
  background: linear-gradient(90deg, #ff6b6b, #ff8787);
  box-shadow: 0 0 10px rgba(255, 107, 107, 0.3);
}
```

### Buttons

```css
.theme-my-theme .vps-btn,
.theme-my-theme button {
  /* Default button */
}

.theme-my-theme .vps-btn-primary,
.theme-my-theme button[type="submit"] {
  /* Primary/submit button */
}

.theme-my-theme .vps-btn:hover,
.theme-my-theme button:hover {
  /* Button hover */
}
```

### Form Elements

```css
.theme-my-theme input,
.theme-my-theme select,
.theme-my-theme textarea {
  /* Input fields */
}

.theme-my-theme input:focus,
.theme-my-theme select:focus,
.theme-my-theme textarea:focus {
  /* Focus state */
}

.theme-my-theme input::placeholder {
  /* Placeholder text */
}
```

### Typography

```css
.theme-my-theme {
  font-family: var(--theme-font-body);
}

.theme-my-theme h1,
.theme-my-theme h2,
.theme-my-theme h3 {
  font-family: var(--theme-font-heading);
}

.theme-my-theme code,
.theme-my-theme pre {
  font-family: var(--theme-font-mono);
}
```

## Publishing Your Theme

### GitHub Repository Structure

```
your-theme-repo/
├── theme.json
├── theme.css
├── preview.png          # Screenshot for theme gallery
├── README.md
└── LICENSE
```

### README Template

```markdown
# My VStats Theme

![Preview](preview.png)

A beautiful theme for VStats.

## Installation

In VStats, go to Settings → Themes → Install Theme, then enter:

```
your-username/your-theme-repo
```

## Features

- Feature 1
- Feature 2
- Feature 3

## Screenshots

...

## License

MIT
```

### Versioning

Use semantic versioning for your theme:

- `1.0.0` - Initial release
- `1.0.1` - Bug fixes
- `1.1.0` - New features (backwards compatible)
- `2.0.0` - Breaking changes

Create Git tags for releases:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Users can then install specific versions:

```
your-username/your-repo@v1.0.0
```

## Installation

### From GitHub

Users install your theme by entering one of these formats in the Theme Manager:

| Format | Example |
|--------|---------|
| Repository root | `username/repo` |
| Subdirectory | `username/repo/themes/my-theme` |
| Specific version | `username/repo@v1.0.0` |
| Branch | `username/repo@develop` |

### From URL

Direct URL to `theme.json`:

```
https://example.com/themes/my-theme/theme.json
```

## Examples

### Minimal Dark Theme

```json
{
  "id": "midnight-minimal",
  "name": "Midnight Minimal",
  "version": "1.0.0",
  "author": "example",
  "description": "A minimal dark theme",
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

### Neon Cyberpunk Theme

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

### Light Glass Theme

```json
{
  "id": "frosted-light",
  "name": "Frosted Light",
  "version": "1.0.0",
  "author": "example",
  "description": "Light glassmorphism theme",
  "isDark": false,
  "style": "glass",
  "preview": {
    "primary": "rgba(255,255,255,0.8)",
    "secondary": "rgba(255,255,255,0.6)",
    "accent": "#6366f1",
    "background": "#e0e7ff"
  },
  "fonts": {
    "heading": "\"Poppins\", sans-serif",
    "body": "\"Inter\", sans-serif",
    "mono": "\"JetBrains Mono\", monospace"
  },
  "borderRadius": "20px",
  "cardStyle": "frosted"
}
```

## Tips & Best Practices

1. **Test thoroughly** - Test your theme with different data states (online/offline servers, high/low resource usage)

2. **Support both states** - Ensure hover, active, focus, and disabled states look good

3. **Use CSS variables** - This makes it easier for users to customize

4. **Consider accessibility** - Ensure sufficient color contrast

5. **Keep file sizes small** - Minimize CSS and optimize images

6. **Document your theme** - Include screenshots and installation instructions

7. **Use semantic versioning** - Makes it easier for users to track updates

8. **Test on different browsers** - Chrome, Firefox, Safari, Edge

## Troubleshooting

### Theme not loading?

- Check that `theme.json` is valid JSON
- Ensure the `id` field matches your CSS class name
- Verify the repository is public

### Styles not applying?

- Make sure all CSS rules are scoped to `.theme-{your-id}`
- Check browser dev tools for CSS specificity issues
- Verify CSS syntax is valid

### Updates not showing?

- Clear browser cache
- Try reinstalling the theme
- Check that version number was updated in `theme.json`

## Support

For help with theme development:

- Open an issue on the VStats repository
- Join our community Discord
- Check existing themes for examples

---

Happy theming! 🎨

