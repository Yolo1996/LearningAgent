(() => {
  const script = document.currentScript;
  if (!script || document.querySelector('.library-back-link')) return;
  const link = document.createElement('a');
  link.className = 'library-back-link';
  link.href = new URL('index.html', script.src).href;
  link.textContent = '← 返回笔记索引';
  link.setAttribute('aria-label', '返回大模型学习笔记索引');
  const style = document.createElement('style');
  style.textContent = '.library-back-link{position:fixed;z-index:9999;left:18px;bottom:18px;padding:9px 13px;border:1px solid rgba(119,137,160,.28);border-radius:9px;color:#1f4f8f!important;background:rgba(255,255,255,.92);box-shadow:0 8px 24px rgba(21,39,67,.14);backdrop-filter:blur(10px);font:700 12px/1.25 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC",sans-serif;text-decoration:none!important;transition:transform .18s ease,box-shadow .18s ease}.library-back-link:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(21,39,67,.2)}body.dark .library-back-link{color:#dce9ff!important;background:rgba(17,28,45,.9);border-color:rgba(255,255,255,.18)}@media(max-width:640px){.library-back-link{left:10px;bottom:10px;padding:8px 10px;font-size:11px}}@media print{.library-back-link{display:none}}';
  document.head.appendChild(style);
  document.body.appendChild(link);
})();
