
/* Basic interactions: dark mode, language toggle, visitor counter (CountAPI), year */
document.addEventListener('DOMContentLoaded', ()=>{
  const darkToggle = document.getElementById('darkToggle');
  const langToggle = document.getElementById('langToggle');
  const yearEl = document.getElementById('year');
  const visitorsEl = document.getElementById('visitors');
  const heroTitle = document.getElementById('heroTitle');
  const heroDesc = document.getElementById('heroDesc');
  const downloadCv = document.getElementById('downloadCv');

  yearEl.textContent = new Date().getFullYear();

  // Dark mode (persist in localStorage)
  const applyMode = (mode)=>{ document.body.className = mode; localStorage.setItem('site-mode', mode); darkToggle.textContent = mode === 'dark' ? '☀️' : '🌙'; }
  const saved = localStorage.getItem('site-mode') || 'light'; applyMode(saved);
  darkToggle.addEventListener('click', ()=> applyMode(document.body.className === 'dark' ? 'light' : 'dark'));

  // Language toggle (simple two-language strings)
  let lang = localStorage.getItem('site-lang') || 'id';
  const setLang = (l)=>{
    lang = l; localStorage.setItem('site-lang', l);
    if(l === 'en'){
      heroTitle.textContent = 'Hi, I\'m Affan — Web Developer';
      heroDesc.textContent = 'I build fast, responsive landing pages and online shops.';
      langToggle.textContent = 'ID';
      downloadCv.textContent = 'Download CV';
    } else {
      heroTitle.textContent = 'Hai, saya Affan — Pembuat Website';
      heroDesc.textContent = 'Saya membuat website landing page dan toko online sederhana yang cepat & responsive.';
      langToggle.textContent = 'EN';
      downloadCv.textContent = 'Download CV';
    }
  };
  setLang(lang);
  langToggle.addEventListener('click', ()=> setLang(lang === 'id' ? 'en' : 'id'));

  // Visitor counter using CountAPI (https://countapi.xyz) - public free counter
  // Key namespace: affan-site, key: main-page. You can change to your own domain later.
  fetch('https://api.countapi.xyz/hit/affan-site/main-page')
    .then(r=>r.json()).then(data=>{
      if(data && data.value) visitorsEl.textContent = data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }).catch(err=>{ visitorsEl.textContent = '—'; });

});
