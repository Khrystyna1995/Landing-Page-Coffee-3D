const navMenu = document.getElementById('nav-menu');
    toggleMenu = document.getElementById('nav-toggle');
    closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', event => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', event => {
    navMenu.classList.toggle('show');
});

