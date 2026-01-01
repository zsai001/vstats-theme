#!/usr/bin/env node

/**
 * Generate preview thumbnails for all themes
 * 
 * Usage: node scripts/generate-previews.js
 * 
 * Requirements: npm install canvas
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const THEMES_DIR = path.join(__dirname, '..', 'themes');
const WIDTH = 400;
const HEIGHT = 300;

// Parse color string (supports hex, rgba, etc.)
function parseColor(colorStr) {
  if (!colorStr) return '#888888';
  return colorStr;
}

// Draw rounded rectangle
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Draw a mock server card
function drawCard(ctx, x, y, w, h, radius, colors, isDark) {
  // Card background
  ctx.fillStyle = colors.primary;
  roundRect(ctx, x, y, w, h, radius);
  ctx.fill();

  // Card shadow for light themes
  if (!isDark) {
    ctx.shadowColor = 'rgba(0,0,0,0.1)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;
    ctx.fill();
    ctx.shadowColor = 'transparent';
  }

  // Progress bar background
  const barY = y + h - 30;
  const barH = 8;
  const barPadding = 15;
  ctx.fillStyle = colors.secondary;
  roundRect(ctx, x + barPadding, barY, w - barPadding * 2, barH, 4);
  ctx.fill();

  // Progress bar fill
  const progress = 0.3 + Math.random() * 0.5;
  ctx.fillStyle = colors.accent;
  roundRect(ctx, x + barPadding, barY, (w - barPadding * 2) * progress, barH, 4);
  ctx.fill();

  // Status dot
  ctx.beginPath();
  ctx.arc(x + w - 20, y + 20, 6, 0, Math.PI * 2);
  ctx.fillStyle = '#22c55e';
  ctx.fill();

  // Title bar (simulated text)
  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)';
  roundRect(ctx, x + 15, y + 15, 80, 10, 3);
  ctx.fill();

  // Subtitle
  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)';
  roundRect(ctx, x + 15, y + 32, 50, 6, 2);
  ctx.fill();

  // Stats
  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
  roundRect(ctx, x + 15, y + 55, 40, 20, 4);
  ctx.fill();
  roundRect(ctx, x + 65, y + 55, 40, 20, 4);
  ctx.fill();
}

// Generate preview for a theme
function generatePreview(themeDir, themeJson) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  const preview = themeJson.preview || {};
  const colors = {
    primary: parseColor(preview.primary) || '#ffffff',
    secondary: parseColor(preview.secondary) || '#f0f0f0',
    accent: parseColor(preview.accent) || '#3b82f6',
    background: parseColor(preview.background) || '#e5e5e5'
  };
  const isDark = themeJson.isDark || false;
  const borderRadius = parseInt(themeJson.borderRadius) || 12;
  const style = themeJson.style || 'flat';

  // Background
  if (style === 'glass' || themeJson.id === 'aesthetic') {
    // Gradient background for glass/aesthetic
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, colors.background);
    gradient.addColorStop(1, colors.secondary);
    ctx.fillStyle = gradient;
  } else {
    ctx.fillStyle = colors.background;
  }
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Add pattern for specific styles
  if (style === 'brutalist' || themeJson.id === 'cyberpunk') {
    // Grid pattern
    ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i < WIDTH; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, HEIGHT);
      ctx.stroke();
    }
    for (let i = 0; i < HEIGHT; i += 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(WIDTH, i);
      ctx.stroke();
    }
  }

  if (themeJson.id === 'handdrawn') {
    // Dots pattern
    ctx.fillStyle = 'rgba(0,0,0,0.03)';
    for (let x = 10; x < WIDTH; x += 15) {
      for (let y = 10; y < HEIGHT; y += 15) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  if (themeJson.id === 'memphis') {
    // Memphis shapes
    ctx.fillStyle = 'rgba(255,107,107,0.2)';
    ctx.beginPath();
    ctx.arc(50, 250, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(78,205,196,0.2)';
    ctx.fillRect(340, 30, 40, 40);
    
    ctx.fillStyle = 'rgba(255,230,109,0.2)';
    ctx.beginPath();
    ctx.moveTo(350, 220);
    ctx.lineTo(380, 270);
    ctx.lineTo(320, 270);
    ctx.closePath();
    ctx.fill();
  }

  if (themeJson.id === 'terminal') {
    // Scanlines
    ctx.fillStyle = 'rgba(0,255,0,0.02)';
    for (let y = 0; y < HEIGHT; y += 3) {
      ctx.fillRect(0, y, WIDTH, 1);
    }
  }

  // Draw header bar
  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
  ctx.fillRect(0, 0, WIDTH, 40);

  // Header dots (window controls)
  const dotColors = ['#ff5f57', '#febc2e', '#28c840'];
  dotColors.forEach((color, i) => {
    ctx.beginPath();
    ctx.arc(20 + i * 18, 20, 5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });

  // Draw cards
  const cardWidth = 170;
  const cardHeight = 100;
  const gap = 15;
  const startX = 20;
  const startY = 55;

  // Card 1
  drawCard(ctx, startX, startY, cardWidth, cardHeight, Math.min(borderRadius, 16), colors, isDark);

  // Card 2
  drawCard(ctx, startX + cardWidth + gap, startY, cardWidth, cardHeight, Math.min(borderRadius, 16), colors, isDark);

  // Card 3
  drawCard(ctx, startX, startY + cardHeight + gap, cardWidth, cardHeight, Math.min(borderRadius, 16), colors, isDark);

  // Card 4
  drawCard(ctx, startX + cardWidth + gap, startY + cardHeight + gap, cardWidth, cardHeight, Math.min(borderRadius, 16), colors, isDark);

  // Add accent highlight
  ctx.fillStyle = colors.accent;
  ctx.globalAlpha = 0.8;
  roundRect(ctx, WIDTH - 70, HEIGHT - 30, 50, 14, 7);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Theme name label
  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)';
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(themeJson.name || themeJson.id, WIDTH - 15, HEIGHT - 12);

  // Save image
  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join(themeDir, 'preview.png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`✓ Generated: ${outputPath}`);
}

// Main
async function main() {
  console.log('🎨 Generating theme previews...\n');

  const themes = fs.readdirSync(THEMES_DIR).filter(name => {
    const themePath = path.join(THEMES_DIR, name);
    return fs.statSync(themePath).isDirectory();
  });

  let generated = 0;
  let failed = 0;

  for (const themeName of themes) {
    const themeDir = path.join(THEMES_DIR, themeName);
    const jsonPath = path.join(themeDir, 'theme.json');

    if (!fs.existsSync(jsonPath)) {
      console.log(`⚠ Skipped: ${themeName} (no theme.json)`);
      continue;
    }

    try {
      const themeJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      generatePreview(themeDir, themeJson);
      generated++;
    } catch (err) {
      console.error(`✗ Failed: ${themeName} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\n✨ Done! Generated ${generated} previews, ${failed} failed.`);
}

main().catch(console.error);

