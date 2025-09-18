  
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');

        navLinks.forEach(link => {
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
            document.getElementById('about').classList.add('active');
        });

        

        // // Add animation to skill cards on scroll
        // const observerOptions = {
        //     threshold: 0.1,
        //     rootMargin: '0px 0px -50px 0px'
        // };

        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             entry.target.style.opacity = '1';
        //             entry.target.style.transform = 'translateY(0)';
        //         }
        //     });
        // }, observerOptions);

        // // Observe all cards for animation
        // document.querySelectorAll('.skill-card, .project-card, .certificate-card').forEach(card => {
        //     card.style.opacity = '0';
        //     card.style.transform = 'translateY(20px)';
        //     card.style.transition = 'all 0.6s ease';
        //     observer.observe(card);
        // });