(function () {
  var PATH = window.location.pathname;
  var IS_EN = PATH === '/en' || PATH.startsWith('/en/');
  var IS_JA = PATH === '/ja' || PATH.startsWith('/ja/');

  var basePath = IS_EN ? (PATH.replace(/^\/en/, '') || '/')
               : IS_JA ? (PATH.replace(/^\/ja/, '') || '/')
               : PATH;

  var zhPath = basePath;
  var enPath = '/en' + (basePath === '/' ? '/' : basePath);
  var jaPath = '/ja' + (basePath === '/' ? '/' : basePath);

  document.addEventListener('DOMContentLoaded', function () {
    var zhBtn = document.getElementById('zh-toggle');
    var enBtn = document.getElementById('en-toggle');
    var jaBtn = document.getElementById('ja-toggle');
    var legacyBtn = document.getElementById('lang-toggle');

    if (zhBtn) { zhBtn.href = zhPath; zhBtn.addEventListener('click', function(){ localStorage.setItem('hexion-lang','zh'); }); }
    if (enBtn) { enBtn.href = enPath; enBtn.addEventListener('click', function(){ localStorage.setItem('hexion-lang','en'); }); }
    if (jaBtn) { jaBtn.href = jaPath; jaBtn.addEventListener('click', function(){ localStorage.setItem('hexion-lang','ja'); }); }

    // Legacy: keep existing id="lang-toggle" working for zh↔en pages
    if (legacyBtn) {
      legacyBtn.href = IS_EN ? zhPath : enPath;
      legacyBtn.addEventListener('click', function () {
        localStorage.setItem('hexion-lang', IS_EN ? 'zh' : 'en');
      });
    }
  });
})();
