// ==========================================
// ORYKTOS DIGITAL PRACTICE - CORE ENGINE JS
// ==========================================

// 1. Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  if (!menu || !btn) return;

  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    btn.classList.remove('is-open');
    document.body.style.overflow = '';
  } else {
    menu.classList.add('open');
    btn.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

// 2. Live Telemetry Clock (UTC + Status)
function updateClock() {
  const clockEl = document.getElementById('telemetry-clock');
  if (!clockEl) return;
  const now = new Date();
  const utc = now.toUTCString().slice(17, 25);
  clockEl.textContent = `UTC ${utc} | NODE: ONLINE (0.04ms)`;
}
setInterval(updateClock, 1000);
updateClock();

// 3. Synthetic Benchmark Runner (Homepage & Services)
function runBenchmark() {
  const terminal = document.getElementById('terminal-log');
  if (!terminal) return;
  
  terminal.innerHTML = '<span style="color:#2be4a7">> Initializing Oryktos decoupled edge audit...</span>\n';
  
  const steps = [
    '> DNS Resolution: 4ms [Cloudflare Edge Relay]',
    '> TTFB: 22ms [SSR Next.js / Edge Worker]',
    '> Core Web Vitals: LCP 0.6s | CLS 0.00 | INP 18ms',
    '> Lighthouse Score: 100/100 (Performance, SEO, Security)'
  ];

  steps.forEach((step, idx) => {
    setTimeout(() => {
      terminal.innerHTML += `${step}\n`;
      terminal.scrollTop = terminal.scrollHeight;
    }, (idx + 1) * 350);
  });
}

// 4. Auto-close mobile menu on desktop resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      btn.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }
});
