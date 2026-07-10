// Animações suaves da landing page
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Rastreamento exclusivo de cliques no WhatsApp via dataLayer/GTM.
// Não há rastreamento de clique em telefone nesta versão.
window.dataLayer = window.dataLayer || [];

document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]').forEach((link) => {
  link.addEventListener('click', () => {
    window.dataLayer.push({
      event: 'whatsapp_click',
      event_category: 'lead',
      event_label: link.href,
      page_location: window.location.href
    });
  });
});
