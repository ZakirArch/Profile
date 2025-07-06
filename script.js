document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');

  menuOverlay.addEventListener('click', function() {
    menuToggle.checked = false;
  });
});
