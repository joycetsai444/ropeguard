const HEADER_HTML = `
<header class="site-header">
  <div class="header-inner container">
    <a href="/index.html" class="logo">
      <span class="logo-zh">繩護工程</span>
      <span class="logo-en">RopeGuard Engineering</span>
    </a>
    <nav class="main-nav" id="mainNav">
      <a href="/index.html" data-page="index">首頁</a>
      <a href="/services.html" data-page="services">服務項目</a>
      <a href="/portfolio.html" data-page="portfolio">施作案例</a>
      <a href="/about.html" data-page="about">關於繩護</a>
      <a href="/blog/index.html" data-page="blog">工程知識</a>
      <a href="/contact.html" data-page="contact" class="nav-cta">聯絡我們</a>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="開啟選單">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <div class="logo">
        <span class="logo-zh">繩護工程</span>
        <span class="logo-en">RopeGuard Engineering</span>
      </div>
      <p class="footer-tagline">台南老屋與華廈的高空防水技術顧問</p>
    </div>
    <div class="footer-links">
      <div class="footer-col">
        <h4>服務項目</h4>
        <a href="/services.html#rope">高空繩索作業</a>
        <a href="/services.html#waterproof">室內外防水工程</a>
        <a href="/services.html#electric">水電設備安裝維修</a>
      </div>
      <div class="footer-col">
        <h4>關於繩護</h4>
        <a href="/about.html">品牌故事</a>
        <a href="/portfolio.html">施作案例</a>
        <a href="/blog/index.html">工程知識</a>
      </div>
      <div class="footer-col">
        <h4>聯絡洽談</h4>
        <a href="https://line.me/R/ti/p/@377civwo" target="_blank" class="line-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.02 2 11c0 2.77 1.33 5.23 3.42 6.89L4.5 22l4.25-2.13C9.72 20.28 10.83 20.5 12 20.5c5.52 0 10-4.02 10-9S17.52 2 12 2z"/></svg>
          LINE 業主諮詢
        </a>
        <a href="https://line.me/R/ti/p/@377civwo" target="_blank" class="line-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.02 2 11c0 2.77 1.33 5.23 3.42 6.89L4.5 22l4.25-2.13C9.72 20.28 10.83 20.5 12 20.5c5.52 0 10-4.02 10-9S17.52 2 12 2z"/></svg>
          LINE 設計師合作
        </a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <span>© 2025 繩護工程 RopeGuard Engineering｜台南在地高空防水專業工程</span>
    </div>
  </div>
</footer>
`;

function initComponents() {
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Active nav state
  const path = window.location.pathname;
  let currentPage = 'index';
  if (path.includes('services')) currentPage = 'services';
  else if (path.includes('portfolio')) currentPage = 'portfolio';
  else if (path.includes('about')) currentPage = 'about';
  else if (path.includes('contact')) currentPage = 'contact';
  else if (path.includes('blog')) currentPage = 'blog';

  document.querySelectorAll('.main-nav a[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // Header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }
}

document.addEventListener('DOMContentLoaded', initComponents);
