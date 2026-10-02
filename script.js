// Mobile Menu Toggle Logic
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  if (!menu || !btn) return;

  const isOpen = btn.classList.contains('is-open');
  if (isOpen) {
    // Close
    btn.classList.remove('is-open');
    menu.style.opacity = '0';
    menu.style.pointerEvents = 'none';
    setTimeout(() => { menu.style.visibility = 'hidden'; }, 300);
    document.body.style.overflow = '';
  } else {
    // Open
    btn.classList.add('is-open');
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
    menu.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
  }
}

// Live Telemetry Clock
function updateClock() {
  const clockEl = document.getElementById('telemetry-clock');
  if (!clockEl) return;
  const now = new Date();
  const utc = now.toUTCString().slice(17, 25);
  clockEl.textContent = `UTC ${utc} | NODE: ONLINE (0.04ms)`;
}
setInterval(updateClock, 1000);
updateClock();

// Synthetic Benchmark
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

// Auto-close menu on desktop resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    if (btn && btn.classList.contains('is-open')) {
      btn.classList.remove('is-open');
      menu.style.opacity = '0';
      menu.style.pointerEvents = 'none';
      menu.style.visibility = 'hidden';
      document.body.style.overflow = '';
    }
  }
});
