import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const scrollY = parseInt(process.argv[3] || '0');
const label = process.argv[4] || '';

const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

let n = 1;
while (fs.existsSync(path.join(screenshotDir, `section-${n}${label ? '-' + label : ''}.png`))) n++;
const filename = `section-${n}${label ? '-' + label : ''}.png`;
const filepath = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'load', timeout: 30000 });

await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.transition = 'none';
    el.classList.add('visible');
  });
});
await page.evaluate((y) => window.scrollTo(0, y), scrollY);
await new Promise(r => setTimeout(r, 500));

await page.screenshot({ path: filepath, fullPage: false });
await browser.close();

console.log(`Screenshot saved: temporary screenshots/${filename}`);
