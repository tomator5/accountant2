document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');
    const catchPhrases = document.querySelectorAll('.catch-phrase');
    const mainHeight = document.querySelector('main').offsetHeight;
    
    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    catchPhrases.forEach(phrase => {
        const randomTop = Math.floor(Math.random() * (mainHeight - 100)) + 50; // Random position within main content
        phrase.style.top = `${randomTop}px`;
    });

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check on page load
});
