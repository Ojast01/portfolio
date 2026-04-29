// Custom Cursor Implementation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Slight delay for the follower
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

// Hover effect for links and buttons
const interactiveElements = document.querySelectorAll('a, .btn, .tag, .project-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.style.width = '50px';
        cursorFollower.style.height = '50px';
        cursorFollower.style.background = 'rgba(0, 243, 255, 0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
        cursorFollower.style.background = 'transparent';
    });
});

// Scroll Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.skill-category, .project-card, .contact-box');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
