/* Shared shhosting.net site shell: header, navigation, footer, AI-tools popup.
   Intentionally dependency-free and compatible with GitHub Pages (no build step). */
(() => {
  const headerMarkup = `
<header class="site-header">
  <a class="brand-link" href="/" aria-label="shhosting.net home">
    <img class="logo-icon theme-swap light" src="/assets/img/logo-light.svg" alt="">
    <img class="logo-icon theme-swap dark" src="/assets/img/logo-dark.svg" alt="">
    <img class="logo-wordmark theme-swap light" src="/assets/img/wordmark-light.svg" alt="shhosting.net">
    <img class="logo-wordmark theme-swap dark" src="/assets/img/wordmark-dark.svg" alt="shhosting.net">
  </a>
  <nav class="site-nav" aria-label="Main navigation">
    <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="navMenu" aria-label="Open menu">
      <span class="nav-toggle-bars" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>
    <ul class="nav-menu" id="navMenu">
      <li><a href="/checksum-verifier">Checksum Verifier</a></li>
      <li><a href="/qr-code-generator">QR Code Generator</a></li>
      <li><a href="/bank-dice-game">Bank Dice Game</a></li>
    </ul>
  </nav>
</header>`;
  const footerMarkup = `
<footer class="site-footer">
  <span class="footer-credit">
    <span class="footer-group">&copy; 2026 shhosting.net &middot; <a href="mailto:contact@shhosting.net">contact@shhosting.net</a></span>
    <span class="footer-group">&middot; Hosted on <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a> &middot; Built with various <span class="ai-tools-wrap"><button class="ai-tools-trigger" id="ai-tools-trigger" type="button" aria-expanded="false" aria-controls="ai-tools-popover">AI tools</button>
      <span class="ai-tools-popover" id="ai-tools-popover" role="menu" aria-label="AI tools" hidden>
        <a class="ai-tools-link" role="menuitem" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">
          <span class="ai-tools-icon chatgpt-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M9.2 3.4a5.3 5.3 0 0 1 8.9 2.2 5.1 5.1 0 0 1 2.5 7.8 5.2 5.2 0 0 1-4.1 7.2 5.2 5.2 0 0 1-8.8-2.1 5.2 5.2 0 0 1-2.5-7.9 5.2 5.2 0 0 1 4-7.2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m8.3 7.2 7.4 4.2v5.3M15.7 7.2 8.3 11.4v5.3M5.7 9.4l4.5-2.6M18.3 14.6l-4.5 2.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
          <span class="ai-tools-name"><strong>ChatGPT</strong> (OpenAI)</span><span class="ai-tools-external" aria-hidden="true">↗</span>
        </a>
        <a class="ai-tools-link" role="menuitem" href="https://claude.ai/" target="_blank" rel="noopener noreferrer">
          <span class="ai-tools-icon claude-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#D97757"/><path d="m12 2 1.6 7.1L20 5l-4.1 6.1 6.1 1.1-6.1 1.1L20 19l-6.4-4.1L12 22l-1.6-7.1L4 19l4.1-5.7L2 12l6.1-1.1L4 5l6.4 4.1Z" fill="#fff"/></svg></span>
          <span class="ai-tools-name"><strong>Claude</strong> (Anthropic)</span><span class="ai-tools-external" aria-hidden="true">↗</span>
        </a>
        <a class="ai-tools-link" role="menuitem" href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">
          <span class="ai-tools-icon gemini-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><defs><linearGradient id="site-gemini-gradient" x1="2" y1="22" x2="22" y2="2"><stop stop-color="#4285F4"/><stop offset=".5" stop-color="#9B72CB"/><stop offset="1" stop-color="#D96570"/></linearGradient></defs><path d="M12 1.8c1.1 5.3 4.9 9.1 10.2 10.2C16.9 13.1 13.1 16.9 12 22.2 10.9 16.9 7.1 13.1 1.8 12 7.1 10.9 10.9 7.1 12 1.8Z" fill="url(#site-gemini-gradient)"/></svg></span>
          <span class="ai-tools-name"><strong>Gemini</strong> (Google)</span><span class="ai-tools-external" aria-hidden="true">↗</span>
        </a>
        <a class="ai-tools-link" role="menuitem" href="https://lumo.proton.me/" target="_blank" rel="noopener noreferrer">
          <span class="ai-tools-icon lumo-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#6D4AFF"/><path d="M5 14c0-4 3-7 7-7s7 3 7 7-3 5-7 5-7-1-7-5Z" fill="#fff"/><circle cx="9" cy="13" r="1" fill="#4A2DC5"/><circle cx="15" cy="13" r="1" fill="#4A2DC5"/></svg></span>
          <span class="ai-tools-name"><strong>Lumo</strong> (Proton)</span><span class="ai-tools-external" aria-hidden="true">↗</span>
        </a>
      </span>
    </span></span>
  </span>
</footer>`;
  function installShell() {
    if (!document.querySelector('.site-header')) {
      const main = document.querySelector('main');
      if (main) main.insertAdjacentHTML('beforebegin', headerMarkup);
      else document.body.insertAdjacentHTML('afterbegin', headerMarkup);
    }
    if (!document.querySelector('.site-footer')) document.body.insertAdjacentHTML('beforeend', footerMarkup);

    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) {
      const closeMenu = () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      };
      toggle.addEventListener('click', event => {
        event.stopPropagation();
        const open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
      document.addEventListener('click', event => {
        if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
      });
      document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    }

    const trigger = document.getElementById('ai-tools-trigger');
    const popup = document.getElementById('ai-tools-popover');
    if (trigger && popup) {
      // Render outside the translucent footer so the popup itself remains opaque.
      document.body.appendChild(popup);
      const closePopup = () => {
        popup.hidden = true;
        popup.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      };
      const positionPopup = () => {
        const anchor = trigger.getBoundingClientRect();
        const width = Math.min(Math.max(popup.offsetWidth, 238), window.innerWidth - 32);
        const center = Math.min(Math.max(anchor.left + anchor.width / 2, width / 2 + 16), window.innerWidth - width / 2 - 16);
        const top = anchor.top - popup.offsetHeight - 10;
        popup.style.left = center + 'px';
        popup.style.top = (top >= 12 ? top : Math.min(anchor.bottom + 10, window.innerHeight - popup.offsetHeight - 12)) + 'px';
      };
      const openPopup = () => {
        popup.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
        positionPopup();
        requestAnimationFrame(() => popup.classList.add('is-open'));
      };
      trigger.addEventListener('click', event => {
        event.stopPropagation();
        if (popup.hidden) openPopup(); else closePopup();
      });
      document.addEventListener('click', event => {
        if (!popup.contains(event.target) && !trigger.contains(event.target)) closePopup();
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !popup.hidden) { closePopup(); trigger.focus(); }
      });
      window.addEventListener('resize', () => { if (!popup.hidden) positionPopup(); });
      window.addEventListener('scroll', () => { if (!popup.hidden) positionPopup(); }, true);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installShell, { once: true });
  else installShell();
})();