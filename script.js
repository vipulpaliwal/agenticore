function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
    
        // Add scroll event listener to change nav colors and hamburger icon color
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            const navLinks = header.querySelectorAll('.md\\:flex a:not(.gradient-text)');
            const mobileMenuButton = document.querySelector('button.md\\:hidden'); // Select the hamburger icon button
    
            if (window.scrollY > 50) {
                // Outside hero section - add white background and change text to gray
                header.classList.add('bg-white', 'shadow-md');
                navLinks.forEach(link => {
                    if (!link.classList.contains('bg-red-600')) {
                        link.classList.remove('text-white', 'hover:text-gray-200');
                        link.classList.add('text-gray-600', 'hover:text-gray-900');
                    }
                });
                // Change hamburger icon color to gray
                if (mobileMenuButton) {
                    mobileMenuButton.classList.remove('text-white');
                    mobileMenuButton.classList.add('text-gray-600');
                }
            } else {
                // In hero section - transparent background and white text
                header.classList.remove('bg-white', 'shadow-md');
                navLinks.forEach(link => {
                    if (!link.classList.contains('bg-red-600')) {
                        link.classList.remove('text-gray-600', 'hover:text-gray-900');
                        link.classList.add('text-white', 'hover:text-gray-200');
                    }
                });
                // Change hamburger icon color back to white
                if (mobileMenuButton) {
                    mobileMenuButton.classList.remove('text-gray-600');
                    mobileMenuButton.classList.add('text-white');
                }
            }
        });
    
        // Trigger on page load to set initial state
        window.addEventListener('load', function() {
            window.dispatchEvent(new Event('scroll'));
        });
    
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });
    
        // Add animation class to all card icons
        document.addEventListener('DOMContentLoaded', function() {
            // Select all card icons (Font Awesome icons inside cards)
            const cardIcons = document.querySelectorAll('.card-hover .fas, .bg-white .fas, .bg-gray-50 .fas');
            
            // Add animation class to each icon
            cardIcons.forEach(icon => {
                icon.classList.add('card-icon-animate');
            });
        });
