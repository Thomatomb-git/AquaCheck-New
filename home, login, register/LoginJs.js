// LoginJs.js
const login = (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username !== storedUser) {
    alert("Wrong username");
    return;
  }
  if (password !== storedPass) {
    alert("Wrong password");
    return;
  }

  // Sukses login → halaman setelah login
  window.location.href = "./home/home-after.html";
};

document.getElementById("Login-form").onsubmit = login;
