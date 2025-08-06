// Navbar toggle and smooth scrolling with Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarNav');

  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
  });

  document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });

      if (window.innerWidth <= 768) {
        navbarCollapse.classList.remove('show');
      }
    });
  });

  // Fade-in animation for sections
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});