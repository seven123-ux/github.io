// 阴阳鱼开屏加载动画
(function () {
  const pre = document.createElement('div');
  pre.id = 'preloader';
  pre.innerHTML = `
    <svg class="taiji" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="阴阳鱼">
      <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      <path d="M50 5 A45 45 0 0 1 50 95 A22.5 22.5 0 0 1 50 50 A22.5 22.5 0 0 0 50 5 Z" fill="#000000"/>
      <circle cx="50" cy="27.5" r="7.5" fill="#000000"/>
      <circle cx="50" cy="72.5" r="7.5" fill="#ffffff"/>
    </svg>
    <div class="pre-text">演化中...</div>`;
  document.body.appendChild(pre);

  let removed = false;
  function hide() {
    if (removed) return;
    removed = true;
    pre.classList.add('hide');
    setTimeout(() => pre.remove(), 400);
  }

  if (document.readyState === 'complete') {
    setTimeout(hide, 200);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 200));
  }

  // 兜底：8 秒后强制隐藏，避免页面卡住时遮罩一直不消失
  setTimeout(hide, 8000);
})();
