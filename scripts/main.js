document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.2 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('stat-item')) {
                    animateCount(entry.target.querySelector('.stat-number'));
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    function animateCount(el) {
        const target = parseInt(el.getAttribute('data-target'));
        let count = 0;
        const duration = 2000;
        const inc = target / (duration / 16);

        function update() {
            count += inc;
            if (count < target) {
                el.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                el.innerText = target;
            }
        }
        update();
    }
});