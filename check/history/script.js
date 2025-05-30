document.addEventListener('DOMContentLoaded', () => {
      const csButton = document.getElementById('cs-button');
      const overlay = document.getElementById('overlay');
      const sidebar = document.getElementById('chat-sidebar');
      const closeBtn = document.getElementById('close-chat');
      csButton.addEventListener('click', () => {
        overlay.classList.add('active'); sidebar.classList.add('active');
      });
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active'); sidebar.classList.remove('active');
      });
      overlay.addEventListener('click', () => {
        overlay.classList.remove('active'); sidebar.classList.remove('active');
      });
    });