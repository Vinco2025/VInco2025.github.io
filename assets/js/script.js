window.addEventListener('load', () => {
const initialEls = Array.from(document.querySelectorAll('.fade-up, .scale-up'))
    .filter(el => !el.closest('.about-section'));
  initialEls.forEach((el, i) => setTimeout(() => el.classList.add('show'), i * 200));

const aboutEls = document.querySelectorAll('.about-section .fade-up, .about-section .scale-up');
aboutEls.forEach(el => el.classList.remove('show'));

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
    }
    });
}, { threshold: 0.15 });

aboutEls.forEach(el => observer.observe(el));

const popoverTrigger = document.getElementById('popoverButton');
if (popoverTrigger && typeof bootstrap !== 'undefined' && bootstrap.Popover) {
    try { new bootstrap.Popover(popoverTrigger); } catch (e) { /* ignore */ }
}
});