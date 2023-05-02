let nav = document.querySelector('.mobile-nav-collapse');
        function displayMobileNav() {
            if (nav.style.display == 'none') {
                nav.style.display = 'flex';
                nav.style.width = '100vw';
            }
            else {
                nav.style.display = 'none';
                nav.style.width = '0';
            }
        }