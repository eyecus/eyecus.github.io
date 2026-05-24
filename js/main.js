document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.site-header');

    // Mobile Menu
    mobileMenuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('open');
    });

    // Header Scroll
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        header.style.background = `rgba(255, 255, 255, ${isScrolled ? 0.95 : 0.8})`;
        header.style.boxShadow = isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none';
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('open');
            }
        });
    });

    // Data Viz Animation
    const visionVisual = document.querySelector('.vision-visual');
    if (visionVisual) {
        new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.viz-bar').forEach((bar, i) => {
                    setTimeout(() => bar.style.opacity = '1', i * 100);
                });
            }
        }, { threshold: 0.5 }).observe(visionVisual);
    }
});
