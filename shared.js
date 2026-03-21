// Shared components for Shok-IS
const BASE = 'https://david-26saas.github.io/shok-intelligence';

const NAV = `
<nav>
  <a href="${BASE}/" class="nav-logo">
    <div class="nav-logo-mark"><svg viewBox="0 0 14 14"><path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2z"/></svg></div>
    Shok-IS
  </a>
  <div class="nav-links">
    <a href="${BASE}/#features">Product</a>
    <a href="${BASE}/#developers">Developers</a>
    <a href="${BASE}/integrations/index.html">Integrations</a>
    <a href="${BASE}/#security">Security</a>
    <a href="${BASE}/#pricing">Pricing</a>
    <a href="${BASE}/docs/index.html">Docs</a>
  </div>
  <a href="${BASE}/signup/index.html" class="nav-cta">Get Started</a>
</nav>`;

const FOOTER = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${BASE}/" class="nav-logo">
          <div class="nav-logo-mark"><svg viewBox="0 0 14 14" fill="white"><path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2z"/></svg></div>
          Shok-IS
        </a>
        <p>Predictive Intelligence Infrastructure. Built for regulated industries and engineering teams that demand reliability.</p>
        <div class="footer-legal">
          Shok Intelligence Systems Ltd.<br>
          Registered in England & Wales · Company No. 15XXXXXX<br>
          71-75 Shelton Street, Covent Garden<br>
          London, WC2H 9JQ, United Kingdom
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Product</div>
        <a href="${BASE}/#features">Features</a>
        <a href="${BASE}/docs/index.html">API Reference</a>
        <a href="${BASE}/changelog.html">Changelog</a>
        <a href="${BASE}/roadmap.html">Roadmap</a>
        <a href="${BASE}/status.html">Status Page</a>
        <a href="${BASE}/signup/index.html">Sandbox</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Company</div>
        <a href="${BASE}/about.html">About</a>
        <a href="${BASE}/blog.html">Blog</a>
        <a href="${BASE}/careers.html" class="hl">Careers — We're hiring →</a>
        <a href="${BASE}/press-kit.html">Press Kit</a>
        <a href="${BASE}/#security">Security</a>
        <a href="mailto:hello@shok-is.com">Contact</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Legal & Compliance</div>
        <a href="${BASE}/legal/privacy.html">Privacy Policy</a>
        <a href="${BASE}/legal/terms.html">Terms of Service</a>
        <a href="${BASE}/legal/dpa.html">Data Processing Agreement</a>
        <a href="${BASE}/legal/cookies.html">Cookie Policy</a>
        <a href="${BASE}/legal/aup.html">Acceptable Use Policy</a>
        <a href="${BASE}/legal/gdpr.html">GDPR Statement</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 Shok Intelligence Systems Ltd. All rights reserved.</span>
      <span class="footer-status">All Systems Operational</span>
      <div class="footer-badges">
        <span class="footer-badge">SOC2</span>
        <span class="footer-badge">GDPR</span>
        <span class="footer-badge">UK GDPR</span>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if(navEl) navEl.innerHTML = NAV;
  if(footerEl) footerEl.innerHTML = FOOTER;
});
