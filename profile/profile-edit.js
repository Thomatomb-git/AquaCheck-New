document.addEventListener("DOMContentLoaded", () => {
  // Initialize fields
  document.getElementById("name").value     = localStorage.getItem("username") || "";
  document.getElementById("password").value = localStorage.getItem("password") || "";
  document.getElementById("location").value = localStorage.getItem("address")  || "";
  document.getElementById("email").value    = localStorage.getItem("email")    || "";

  // Save profile
  document.getElementById("saveBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const newName     = document.getElementById("name").value.trim();
    const newPass     = document.getElementById("password").value;
    const newLocation = document.getElementById("location").value.trim();
    const newEmail    = document.getElementById("email").value.trim();

    if (!newName) {
      alert("Username cannot be empty");
      return;
    }
    localStorage.setItem("username", newName);
    localStorage.setItem("password", newPass);
    localStorage.setItem("address",  newLocation);
    localStorage.setItem("email",    newEmail);

    alert("Profile updated!");
    window.location.href = "profile.html";
  });

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