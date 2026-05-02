document.addEventListener('DOMContentLoaded', () => {
    // Scroll Observer for Fade-ins
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger count-up if it's a stat item
                if (entry.target.classList.contains('stat-item')) {
                    startCountUp(entry.target);
                }
                
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, section, .card, .tech-card, .stat-item').forEach(el => {
        fadeObserver.observe(el);
    });

    // Count-up Logic
    function startCountUp(el) {
        const numEl = el.querySelector('.stat-number');
        const target = parseInt(numEl.getAttribute('data-target'));
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps approx

        const updateCount = () => {
            count += increment;
            if (count < target) {
                numEl.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                numEl.innerText = target;
            }
        };
        updateCount();
    }

    // Active Nav Link Handling
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        document.querySelectorAll(".nav-links a").forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href") === `#${current}`) {
                a.classList.add("active");
            }
        });
    });
});
