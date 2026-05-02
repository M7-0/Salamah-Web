document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card, .tech-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
