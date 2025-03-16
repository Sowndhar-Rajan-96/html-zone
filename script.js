document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission with Validation
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        alert(`Thank you, ${name}! Your message has been received. I will get back to you soon.`);
        form.reset();
    });

    // Dynamic Typing Effect in Hero Section
    const heroText = document.getElementById('hero-text');
    const textArray = [
        "Data Engineer | Cloud Specialist | Tech Enthusiast",
        "Building Scalable Data Solutions",
        "Transforming Data into Insights"
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textArray[textIndex].length) {
            heroText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                heroText.textContent = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % textArray.length;
                typeEffect();
            }, 2000);
        }
    }

    typeEffect();
});
