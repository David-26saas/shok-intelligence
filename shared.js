// Shared components for Shok-IS
const NAV = `
<nav>
  <a href="https://shok-intelligence.com/" class="nav-logo">
    <div class="nav-logo-mark"><svg viewBox="0 0 14 14"><path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2z"/></svg></div>
    Shok-IS
  </a>
  <div class="nav-links">
    <a href="https://shok-intelligence.com/#features">Product</a>
    <a href="https://shok-intelligence.com/#developers">Developers</a>
    <a href="https://shok-intelligence.com/integrations/index.html">Integrations</a>
    <a href="https://shok-intelligence.com/#security">Security</a>
    <a href="https://shok-intelligence.com/#pricing">Pricing</a>
    <a href="https://shok-intelligence.com/docs/index.html">Docs</a>
  </div>
  <a href="https://shok-intelligence.com/signup/index.html" class="nav-cta">Get Started</a>
</nav>`;

const FOOTER = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="https://shok-intelligence.com/" class="nav-logo">
          <div class="nav-logo-mark"><svg viewBox="0 0 14 14" fill="white"><path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2z"/></svg></div>
          Shok-IS
        </a>
        <p>Predictive Intelligence Infrastructure. Built for regulated industries and engineering teams that demand reliability.</p>
        <div class="footer-legal">
          Shok Intelligence Systems Ltd.<br>
          Registered in England &amp; Wales · Company No. 15XXXXXX<br>
          71-75 Shelton Street, Covent Garden<br>
          London, WC2H 9JQ, United Kingdom
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Product</div>
        <a href="https://shok-intelligence.com/#features">Features</a>
        <a href="https://shok-intelligence.com/docs/index.html">API Reference</a>
        <a href="https://shok-intelligence.com/changelog.html">Changelog</a>
        <a href="https://shok-intelligence.com/roadmap.html">Roadmap</a>
        <a href="https://shok-intelligence.com/status.html">Status Page</a>
        <a href="https://shok-intelligence.com/signup/index.html">Sandbox</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Company</div>
        <a href="https://shok-intelligence.com/about.html">About</a>
        <a href="https://shok-intelligence.com/blog.html">Blog</a>
        <a href="https://shok-intelligence.com/careers.html" class="hl">Careers — We're hiring →</a>
        <a href="https://shok-intelligence.com/press-kit.html">Press Kit</a>
        <a href="https://shok-intelligence.com/#security">Security</a>
        <a href="https://shok-intelligence.com/contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Legal &amp; Compliance</div>
        <a href="https://shok-intelligence.com/legal/privacy.html">Privacy Policy</a>
        <a href="https://shok-intelligence.com/legal/terms.html">Terms of Service</a>
        <a href="https://shok-intelligence.com/legal/dpa.html">Data Processing Agreement</a>
        <a href="https://shok-intelligence.com/legal/cookies.html">Cookie Policy</a>
        <a href="https://shok-intelligence.com/legal/aup.html">Acceptable Use Policy</a>
        <a href="https://shok-intelligence.com/legal/gdpr.html">GDPR Statement</a>
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
