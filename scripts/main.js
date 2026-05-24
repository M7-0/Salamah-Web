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

    // Navigation Glow Observer
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    const navObserverOptions = {
        threshold: 0.1,
        rootMargin: "-20% 0px -20% 0px"
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => navObserver.observe(section));

    // Burger Menu Functionality
    const burgerBtn = document.getElementById('burger-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (burgerBtn && navLinksContainer) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('open');
            navLinksContainer.classList.toggle('open');
            document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
        });

        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('open');
                navLinksContainer.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    function animateCount(el) {
        const targetStr = el.getAttribute('data-target');
        const target = parseFloat(targetStr);
        const isDecimal = targetStr.includes('.');
        let count = 0;
        const duration = 1600;
        const inc = target / (duration / 16);

        function update() {
            count += inc;
            if (count < target) {
                el.innerText = isDecimal ? count.toFixed(1) : Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                el.innerText = targetStr;
            }
        }
        update();
    }
});