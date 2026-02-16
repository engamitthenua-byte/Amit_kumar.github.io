/*==================== MENU SHOW/HIDE ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hide
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== TYPING ANIMATION ====================*/
const typingText = document.querySelector('.typing-text');
const roles = ['Web Developer', 'Software Engineer', 'Frontend Developer', 'Full Stack Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // Typing speed
    let typeSpeed = 150;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
        // Loop back to first role
        if (roleIndex === roles.length) {
            roleIndex = 0;
        }
        typeSpeed = 500;
    }

    setTimeout(typeRole, typeSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeRole, 1000);
});

/*==================== SMOOTH SCROLL ====================*/
// Smooth scrolling for all anchor links
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

/*==================== FORM SUBMISSION ====================*/
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Here you would typically send the form data to a backend
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);

        // Reset form
        contactForm.reset();
    });
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Simple scroll reveal effect
const revealElements = document.querySelectorAll('.section');

function reveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Initial check
reveal();

/*==================== SKILLS ANIMATION ====================*/
// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skills__percentage');

function animateSkills() {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const barVisible = 150;

        if (barTop < window.innerHeight - barVisible) {
            bar.style.width = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
}

window.addEventListener('scroll', animateSkills);

// Initial check
animateSkills();

/*==================== DOWNLOAD RESUME ====================*/
// Handle resume download button
const resumeButton = document.querySelector('a[href="assets/resume.pdf"]');

if (resumeButton) {
    resumeButton.addEventListener('click', (e) => {
        // Check if resume file exists
        // If not, show a message to the user
        // This is just a placeholder - you'll need to add your actual resume
        console.log('Resume download initiated');
    });
}
