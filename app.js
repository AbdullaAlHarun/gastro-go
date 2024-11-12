
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
    const mobileMenu = document.getElementById('mobile-menu-2');

    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  });
