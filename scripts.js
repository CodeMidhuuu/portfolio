// Navbar toggle for mobile
const toggleBtn = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('.navbar-menu a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });

    // Close navbar on mobile after clicking
    if (window.innerWidth <= 768) {
      navbarMenu.classList.remove('active');
    }
  });
});
