window.addEventListener('load', () => {
    const initialEls = Array.from(document.querySelectorAll('.fade-up, .scale-up'))
        .filter(el => !el.closest('.about-section'));

    initialEls.forEach((el, i) => setTimeout(() => el.classList.add('show'), i * 200));

    const aboutEls = document.querySelectorAll('.about-section .fade-up, .about-section .scale-up');

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

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});

const track = document.querySelector('.skills-track');
if (track) {
    const cards = track.querySelectorAll('.skill-card');
    let index = 0;

    setInterval(() => {
        index++;
        if (index >= cards.length) index = 0;

        const cardWidth = cards[0].offsetWidth + 16;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        if (index === cards.length - 1) {
            setTimeout(() => {
                track.style.transition = 'none';
                track.style.transform = `translateX(0)`;
                index = 0;
                setTimeout(() => {
                    track.style.transition = 'transform 0.6s ease';
                }, 50);
            }, 700);
        }
    }, 2000);
}

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMessage");

    if (form && successMsg) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); 
            successMsg.classList.add("show");
            form.reset();
            setTimeout(() => {
                successMsg.classList.remove("show");
            }, 3000);
        });
    }
});