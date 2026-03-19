import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else if (entry.name === 'index.html') results.push(full);
  }
  return results;
}

const files = walk(__dirname);
let updated = 0;

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const orig = html;

  // Remove the LINE floating button (the entire <a class="line-float">...</a>)
  html = html.replace(/<a href="https:\/\/line\.me\/[^"]*"[^>]*class="line-float"[\s\S]*?<\/a>/g, '');

  // Remove LINE buttons/links in CTA sections (NOT inside nav-cta)
  // Remove <a> tags that link to LINE and are NOT nav-line-btn
  // Pattern: any <a href="line.me..."> that doesn't have class="nav-line-btn"
  // We'll remove lines/anchors with line.me that aren't nav-line-btn
  html = html.replace(/<a href="https:\/\/line\.me\/[^"]*"[^>]*(?<!nav-line-btn)"[^>]*>[\s\S]*?<\/a>/g, (match) => {
    if (match.includes('nav-line-btn')) return match;
    return '';
  });

  // Also remove topbar-line links (should already be removed but be safe)
  html = html.replace(/<a href="https:\/\/line\.me\/[^"]*"[^>]*class="topbar-line"[^>]*>[\s\S]*?<\/a>/g, '');

  if (html !== orig) {
    fs.writeFileSync(file, html, 'utf8');
    updated++;
    console.log('Updated:', path.relative(__dirname, file));
  }
}

console.log(`\nDone. Updated ${updated} files.`);
