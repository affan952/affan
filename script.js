document.addEventListener('DOMContentLoaded', function(){
  const langData = {
    'title': {
      'id':'Halo — Saya Affan',
      'en':"Hi — I'm Affan"
    },
    'subtitle': {
      'id':'Saya membuat website cepat, responsif, dan yang bantu klien jualan online.',
      'en':'I build fast, responsive websites that help clients sell online.'
    },
    'paket_title': {'id':'Paket Layanan','en':'Service Packages'},
    'proyek_title': {'id':'Proyek Terpilih','en':'Selected Projects'},
    'testi_title': {'id':'Testimoni Klien','en':'Client Testimonials'},
    'stat_title': {'id':'Statistik & Pencapaian','en':'Statistics & Achievements'},
    'chat_btn': {'id':'Chat via WhatsApp','en':'Chat via WhatsApp'},
    'nav_home': {'id':'Beranda','en':'Home'}
  };

  function applyLang(lang){
    document.querySelectorAll('[data-key]').forEach(el=>{
      const key = el.getAttribute('data-key');
      if(langData[key] && langData[key][lang]) {
        el.textContent = langData[key][lang];
      }
    });
    localStorage.setItem('site-lang', lang);
    const togg = document.getElementById('langToggle');
    if(togg) togg.textContent = lang === 'id' ? 'EN' : 'ID';
  }

  const initialLang = localStorage.getItem('site-lang') || 'id';
  applyLang(initialLang);

  const btn = document.getElementById('langToggle');
  if(btn) btn.addEventListener('click', ()=>{
    const current = localStorage.getItem('site-lang') || 'id';
    applyLang(current === 'id' ? 'en' : 'id');
  });

  // Animasi Scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.15});

  document.querySelectorAll('.fade-slide').forEach(el=> obs.observe(el));
});
