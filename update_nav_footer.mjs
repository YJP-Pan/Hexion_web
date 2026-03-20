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

const NEW_TOPBAR = `<div class="topbar">
  <a href="/contact/">聯絡我們</a>
  <a href="/blog/" class="topbar-highlight">最新資安報告 →</a>
</div>`;

const NEW_FOOTER = `<footer>
  <div class="footer-top">
    <div><a href="/"><img src="/brand_assets/logo.png" alt="Hexion Networks" style="height:36px;filter:brightness(0) invert(1);opacity:0.85" /></a><p class="footer-brand-desc">結合商業策略、品牌顧問、資訊科技與資安的整合型服務公司。</p></div>
    <div><div class="f-col-title">產品</div><a href="/products/pico-utm-100/" class="f-link">Pico-UTM 100</a><a href="/products/dual-ark-utm-16/" class="f-link">Dual Ark-NGFW 16</a><a href="/products/tera-utm-12/" class="f-link">Tera-NGFW 12</a><a href="/products/lionfilter-200/" class="f-link">Lionfilter 200</a><a href="/products/endblock/" class="f-link">Endblock</a><a href="/products/teamt5/" class="f-link">TeamT5</a><a href="/products/cycraft/" class="f-link">奧義智慧 CyCraft</a></div>
    <div><div class="f-col-title">服務</div><a href="/services/" class="f-link">商業策略</a><a href="/services/" class="f-link">品牌顧問</a><a href="/services/" class="f-link">資安評估</a></div>
    <div><div class="f-col-title">公司</div><a href="/about/" class="f-link">關於我們</a><a href="/blog/" class="f-link">部落格</a><a href="/contact/" class="f-link">聯絡我們</a></div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2026 HEXION NETWORKS.</span>
    <div class="footer-legal"><a href="#">隱私政策</a><a href="#">服務條款</a></div>
  </div>
</footer>`;

const files = walk(__dirname);
let updated = 0;

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Replace topbar (remove LINE from topbar)
  const topbarMatch = html.match(/<div class="topbar">[\s\S]*?<\/div>/);
  if (topbarMatch) {
    const orig = topbarMatch[0];
    if (orig !== NEW_TOPBAR) {
      html = html.replace(orig, NEW_TOPBAR);
      changed = true;
    }
  }

  // 2. Hide 研究 nav item
  html = html.replace(
    /<div class="nav-item"><a href="\/research\/">研究<\/a><\/div>/g,
    '<div class="nav-item" style="display:none"><a href="/research/">研究</a></div>'
  );
  // Also handle already-hidden case (idempotent)
  html = html.replace(
    /<div class="nav-item" style="display:none"><a href="\/research\/">研究<\/a><\/div>/g,
    '<div class="nav-item" style="display:none"><a href="/research/">研究</a></div>'
  );

  // 3. Replace footer
  const footerMatch = html.match(/<footer>[\s\S]*?<\/footer>/);
  if (footerMatch) {
    const orig = footerMatch[0];
    if (orig !== NEW_FOOTER) {
      html = html.replace(orig, NEW_FOOTER);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    updated++;
    console.log('Updated:', path.relative(__dirname, file));
  }
}

console.log(`\nDone. Updated ${updated} files.`);
