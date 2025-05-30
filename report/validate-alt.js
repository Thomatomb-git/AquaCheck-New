document.addEventListener('DOMContentLoaded', function () {
  // Form validation
  const form = document.getElementById('helpForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      const locationTextarea = document.getElementById('location');
      if (locationTextarea && !locationTextarea.value.trim()) {
        event.preventDefault();
        alert('Mohon isi kolom lokasi terlebih dahulu.');
        locationTextarea.focus();
        return;
      }
      const kendalaTextarea = document.getElementById('kendala');
      if (kendalaTextarea && !kendalaTextarea.value.trim()) {
        event.preventDefault();
        alert('Mohon isi kolom kendala terlebih dahulu.');
        kendalaTextarea.focus();
      }
    });
  }

  // Chat sidebar toggle
  const csButton = document.getElementById('cs-button');
  const overlay = document.getElementById('overlay');
  const sidebar = document.getElementById('chat-sidebar');
  const closeBtn = document.getElementById('close-chat');
  if (csButton && overlay && sidebar && closeBtn) {
    csButton.addEventListener('click', () => {
      overlay.classList.add('active');
      sidebar.classList.add('active');
    });
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      sidebar.classList.remove('active');
    });
    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
      sidebar.classList.remove('active');
    });
  }
});