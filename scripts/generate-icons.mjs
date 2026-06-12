import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 180x180 apple-touch-icon
const size = 180;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Background: Sand #e8e0d6
ctx.fillStyle = '#e8e0d6';
ctx.fillRect(0, 0, size, size);

// Scale factor: SVG viewBox 100x100 → 180x180
const scale = size / 100;

ctx.fillStyle = '#05262e';

// Bottom arc (lower half-moon)
ctx.beginPath();
const cx = 50 * scale;
const cy = 50 * scale;
const r = 23 * scale;
ctx.arc(cx, cy, r, 0, Math.PI, false);
ctx.fill();

// Top arc (upper half-moon) — create the gap
ctx.fillStyle = '#e8e0d6';
ctx.beginPath();
ctx.arc(cx, cy, 19.8 * scale, 0, Math.PI, false);
ctx.fill();

// Connectors
ctx.fillStyle = '#05262e';
// Left connector
ctx.fillRect(0, (48.2) * scale, (38) * scale, 3.6 * scale);
// Right connector
ctx.fillRect((62) * scale, (48.2) * scale, size, 3.6 * scale);

const buffer = canvas.toBuffer('image/png');
writeFileSync(resolve(__dirname, '../app/apple-icon.png'), buffer);
console.log('apple-icon.png generated');
