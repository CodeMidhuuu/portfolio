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

    // Close navbar on mobile after clicking and remove active class
    if (window.innerWidth <= 768) {
      navbarMenu.classList.remove('active');
      toggleBtn.focus(); // Improve accessibility
    }
  });
});

// Close navbar when clicking outside on mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && !navbarMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
    navbarMenu.classList.remove('active');
  }
});