import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize a global IntersectionObserver to handle elements with the `reveal` class
function initRevealObserver() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('reveal--visible');
        else entry.target.classList.remove('reveal--visible');
      });
    },
    { threshold: 0.12 }
  );

  // Observe existing reveal elements
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // (optional) observe future additions and attach observer automatically
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of Array.from(m.addedNodes)) {
        if (!(node instanceof Element)) continue;
        if (node.classList.contains('reveal')) observer.observe(node);
        node.querySelectorAll?.('.reveal')?.forEach((child) => observer.observe(child));
      }
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

initRevealObserver();
