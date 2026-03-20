// Shared nav + footer inject
const NAV_HTML = `
<div class="topbar">
  <a href="tel:+886-2-xxxx-xxxx">+886 2 XXXX XXXX</a>
  <a href="/blog/" class="topbar-highlight">最新資安報告 →</a>
  <a href="https://line.me/R/ti/p/@278zhddk" target="_blank" rel="noopener" class="topbar-line">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
    LINE 諮詢
  </a>
</div>
<nav>
  <a href="/" class="nav-logo"><img src="/brand_assets/logo.png" alt="Hexion Networks" /></a>
  <div class="nav-links">
    <div class="nav-item">
      <button>解決方案<svg class="nav-chevron" viewBox="0 0 16 16" fill="currentColor"><path d="M8 11L3 6h10z"/></svg></button>
      <div class="mega">
        <div class="mega-col">
          <div class="mega-label">產業</div>
          <a href="/solutions/finance/" class="mega-link">金融服務</a>
          <a href="/solutions/manufacturing/" class="mega-link">製造業 / OT</a>
          <a href="/solutions/healthcare/" class="mega-link">醫療健康</a>
          <a href="/solutions/government/" class="mega-link">政府機構</a>
        </div>
        <div class="mega-col">
          <div class="mega-label">服務</div>
          <a href="/services/" class="mega-link">商業策略顧問</a>
          <a href="/services/" class="mega-link">品牌顧問</a>
          <a href="/services/" class="mega-link">資安評估</a>
          <a href="/services/" class="mega-link">數位轉型</a>
        </div>
        <div class="mega-col">
          <div class="mega-label">技術</div>
          <a href="/solutions/" class="mega-link">零信任架構</a>
          <a href="/solutions/" class="mega-link">雲端安全</a>
          <a href="/solutions/" class="mega-link">OT 資安</a>
        </div>
        <div class="mega-col" style="border-left:1px solid rgba(255,255,255,0.06);background:rgba(250,88,34,0.03)">
          <div class="mega-label">EDR 產品</div>
          <a href="/products/teamt5/" class="mega-link mega-link-product"><span class="mega-prod-badge" style="background:rgba(250,88,34,0.15);color:#FA5822">APT</span>TeamT5</a>
          <a href="/products/cycraft/" class="mega-link mega-link-product"><span class="mega-prod-badge" style="background:rgba(0,200,200,0.12);color:#00C8C8">AI</span>奧義智慧 CyCraft</a>
          <a href="/products/endblock/" class="mega-link mega-link-product"><span class="mega-prod-badge" style="background:rgba(167,139,250,0.12);color:#A78BFA">EDR</span>Endblock</a>
        </div>
      </div>
    </div>
    <div class="nav-item">
      <button>產品<svg class="nav-chevron" viewBox="0 0 16 16" fill="currentColor"><path d="M8 11L3 6h10z"/></svg></button>
      <div class="mega">
        <div class="mega-col">
          <div class="mega-label">LIONIC NGFW</div>
          <a href="/products/pico-utm-100/" class="mega-link mega-link-product"><span class="mega-prod-badge" style="background:rgba(250,88,34,0.15);color:#FA5822">IT</span>Pico-UTM 100</a>
          <a href="/products/dual-ark-utm-16/" class="mega-link mega-link-product"><span class="mega-prod-badge" style="background:rgba(0,200,200,0.12);color:#00C8C8">IoT</span>Dual Ark-NGFW 16</a>
          <a href="/products/tera-utm-12/" class="mega-link mega-link-product"><span class="mega-prod-badge" style="background:rgba(255,122,69,0.15);color:#FF7A45">OT</span>Tera-NGFW 12</a>
          <a href="/products/lionfilter-200/" class="mega-link mega-link-product"><span class="mega-prod-badge" style="background:rgba(167,139,250,0.12);color:#A78BFA">NET</span>Lionfilter 200</a>
        </div>
        <div class="mega-col">
          <div class="mega-label">端點防護 EDR</div>
          <a href="/products/teamt5/" class="mega-link">TeamT5 ThreatVision</a>
          <a href="/products/cycraft/" class="mega-link">奧義智慧 CyCraft</a>
          <a href="/products/endblock/" class="mega-link">Endblock EDR</a>
        </div>
        <div class="mega-col">
          <div class="mega-label">快速連結</div>
          <a href="/products/" class="mega-link">產品總覽</a>
          <a href="/contact/" class="mega-link">取得報價</a>
        </div>
      </div>
    </div>
    <div class="nav-item"><a href="/services/">服務</a></div>
    <div class="nav-item"><a href="/research/">研究</a></div>
    <div class="nav-item"><a href="/blog/">部落格</a></div>
    <div class="nav-item"><a href="/about/">關於</a></div>
  </div>
  <div class="nav-cta">
    <a href="https://line.me/R/ti/p/@278zhddk" target="_blank" rel="noopener" class="nav-line-btn">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
      LINE 諮詢
    </a>
    <a href="/contact/" class="btn btn-ghost" style="padding:0.5rem 1rem;font-size:0.8125rem;">聯絡業務</a>
    <a href="/contact/" class="btn btn-orange" style="padding:0.5rem 1.125rem;font-size:0.8125rem;">取得報價 →</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div>
      <a href="/"><img src="/brand_assets/logo.png" alt="Hexion Networks" style="height:36px;filter:brightness(0) invert(1);opacity:0.85" /></a>
      <p class="footer-brand-desc">結合商業策略、品牌顧問、資訊科技與資安的整合型服務公司。台灣 LIONIC NGFW 授權經銷商。</p>
      <div style="margin-top:1rem">
        <a href="https://line.me/R/ti/p/@278zhddk" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:0.35rem 0.75rem;background:rgba(6,199,85,0.1);border:1px solid rgba(6,199,85,0.3);border-radius:4px;color:#06C755;font-size:0.6875rem;font-family:'Orbitron',monospace;text-decoration:none">@278zhddk</a>
      </div>
    </div>
    <div>
      <div class="f-col-title">解決方案</div>
      <a href="/solutions/finance/" class="f-link">金融服務</a>
      <a href="/solutions/manufacturing/" class="f-link">製造業 / OT</a>
      <a href="/solutions/healthcare/" class="f-link">醫療健康</a>
      <a href="/solutions/government/" class="f-link">政府機構</a>
    </div>
    <div>
      <div class="f-col-title">產品</div>
      <a href="/products/pico-utm-100/" class="f-link">Pico-UTM 100</a>
      <a href="/products/tera-utm-12/" class="f-link">Tera-NGFW 12</a>
      <a href="/products/teamt5/" class="f-link">TeamT5</a>
      <a href="/products/cycraft/" class="f-link">奧義智慧</a>
      <a href="/products/endblock/" class="f-link">Endblock EDR</a>
    </div>
    <div>
      <div class="f-col-title">服務</div>
      <a href="/services/" class="f-link">商業策略顧問</a>
      <a href="/services/" class="f-link">品牌顧問</a>
      <a href="/services/" class="f-link">資安評估</a>
      <a href="/services/" class="f-link">合規管理</a>
    </div>
    <div>
      <div class="f-col-title">公司</div>
      <a href="/about/" class="f-link">關於我們</a>
      <a href="/research/" class="f-link">研究報告</a>
      <a href="/blog/" class="f-link">部落格</a>
      <a href="/contact/" class="f-link">聯絡我們</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2026 HEXION NETWORKS. ALL RIGHTS RESERVED.</span>
    <div class="footer-legal">
      <a href="#">隱私政策</a>
      <a href="#">服務條款</a>
    </div>
  </div>
</footer>
<a href="https://line.me/R/ti/p/@278zhddk" target="_blank" rel="noopener" class="line-float" title="LINE 諮詢 @278zhddk">
  <span class="line-float-tooltip">LINE 諮詢 @278zhddk</span>
  <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
</a>`;

const REVEAL_SCRIPT = `
<script>
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
<\/script>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-inject');
  if (navEl) navEl.innerHTML = NAV_HTML;
  const footerEl = document.getElementById('footer-inject');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
});
