function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
}
document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.getElementById('typed-text');
    const textArray = [
        "A Full Stack Developer,", 
        "A DevOps Enthusiast,", 
        "A Python Developer,",
        "A Expert In Java,",
        "A Deep Learning Aficionado,"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        currentText = textArray[textIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typedText.innerHTML = currentText.substring(0, charIndex);

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);  // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;  // Move to the next text
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);  // Typing speed
        }
    }

    type();
});
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Animate progress bars when they come into view
    function animateProgressBars() {
        progressBars.forEach(function(bar) {
            if (isInViewport(bar)) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }
        });
    }

    // Run animation on page load and scroll
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Initial call on page load
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.about-section, .education-section, .skill-card, .certification-card, footer'); // Select the elements you want to animate

    // IntersectionObserver to animate when elements come into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    });

    // Add hidden class initially and observe each element
    elements.forEach(element => {
        element.classList.add('hidden'); // Add the hidden class
        observer.observe(element); // Start observing
    });
});
