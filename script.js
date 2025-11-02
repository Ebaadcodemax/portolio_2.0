
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const home = document.querySelector("#home")

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    home.classList.toggle('inactive');
});

const aboutsection=document.querySelector('#about')
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');




navLinks.forEach(link => {11
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        
        sections.forEach(section => {
            section.classList.remove('active');
        });

        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');

        }

        home.classList.add('inactive');
        
        navMenu.classList.remove('active');


        navLinks.forEach(navLink => {
            navLink.style.color = '';
        });
        link.style.color = '#5682B1';
    });
});


document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    sections.forEach(section => {
        section.classList.remove('active');
    });
    aboutsection.classList.add('active');
    home.classList.add('inactive')
});










