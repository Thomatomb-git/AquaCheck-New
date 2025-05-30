document.addEventListener("DOMContentLoaded", () => {
  // Load profile data
  document.getElementById("name").value     = localStorage.getItem("username") || "";
  document.getElementById("password").value = localStorage.getItem("password") || "";
  document.getElementById("location").value = localStorage.getItem("address")  || "";
  document.getElementById("email").value    = localStorage.getItem("email")    || "";

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