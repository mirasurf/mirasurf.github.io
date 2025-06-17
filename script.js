let currentLang = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update navigation
    document.querySelector('a[href="#vision"]').textContent = translations[lang].nav.vision;
    document.querySelector('a[href="#strategy"]').textContent = translations[lang].nav.strategy;
    document.querySelector('a[href="#tech"]').textContent = translations[lang].nav.tech;
    document.querySelector('a[href="#purpose"]').textContent = translations[lang].nav.purpose;
    document.querySelector('a[href="#join"]').textContent = translations[lang].nav.join;

    // Update hero section
    document.querySelector('#vision h1').textContent = translations[lang].hero.title;
    document.querySelector('#vision h2').textContent = translations[lang].hero.subtitle;
    document.querySelector('#vision p').textContent = translations[lang].hero.description;

    // Update worlds
    const worlds = document.querySelectorAll('.world-item');
    worlds[0].querySelector('h3').textContent = translations[lang].worlds.mental.title;
    worlds[0].querySelector('p').textContent = translations[lang].worlds.mental.description;
    worlds[1].querySelector('h3').textContent = translations[lang].worlds.cyber.title;
    worlds[1].querySelector('p').textContent = translations[lang].worlds.cyber.description;
    worlds[2].querySelector('h3').textContent = translations[lang].worlds.physical.title;
    worlds[2].querySelector('p').textContent = translations[lang].worlds.physical.description;

    // Update strategy section
    document.querySelector('#strategy h2').textContent = translations[lang].strategy.title;
    const techItems = document.querySelectorAll('.tech-item');
    techItems[0].querySelector('p').textContent = translations[lang].strategy.experience;
    techItems[1].querySelector('p').textContent = translations[lang].strategy.context;
    techItems[2].querySelector('p').textContent = translations[lang].strategy.flow;
    techItems[3].querySelector('p').textContent = translations[lang].strategy.ecosystem;

    // Update purpose section
    document.querySelector('#purpose h2').textContent = translations[lang].purpose.title;
    document.querySelector('#purpose p').textContent = translations[lang].purpose.text;

    // Update join section
    document.querySelector('#join h2').textContent = translations[lang].join.title;
    const joinParagraphs = document.querySelectorAll('#join p');
    joinParagraphs[0].textContent = translations[lang].join.subtitle;
    joinParagraphs[1].textContent = translations[lang].join.description;
    document.querySelector('.cta-button').textContent = translations[lang].join.contact;
    document.querySelector('.cta-button.secondary').textContent = translations[lang].join.follow;

    // Update footer
    const footerGroups = document.querySelectorAll('.footer-link-group');
    footerGroups[0].querySelector('h4').textContent = translations[lang].footer.contact;
    footerGroups[1].querySelector('h4').textContent = translations[lang].footer.website;
    document.querySelector('.footer-copyright').textContent = translations[lang].footer.copyright;

    // Update language selector
    document.querySelector('.lang-selector').textContent = lang === 'en' ? '中文' : 'English';
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Fade in elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.screen').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}); 