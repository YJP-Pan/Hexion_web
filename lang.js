(function () {
  var PATH = window.location.pathname;
  var IS_EN = PATH === '/en' || PATH.startsWith('/en/');

  var zhPath = IS_EN ? (PATH.replace(/^\/en/, '') || '/') : PATH;
  var enPath = IS_EN ? PATH : ('/en' + PATH);

  // Wire up the toggle button after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.href = IS_EN ? zhPath : enPath;
    btn.addEventListener('click', function () {
      localStorage.setItem('hexion-lang', IS_EN ? 'zh' : 'en');
    });
  });
})();
