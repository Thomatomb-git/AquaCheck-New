// Registerjs.js
const register = (event) => {
  event.preventDefault();

  const username         = document.getElementById("username").value.trim();
  const address          = document.getElementById("address").value.trim();
  const email            = document.getElementById("email").value.trim();
  const password         = document.getElementById("password").value;
  const confirmPassword  = document.getElementById("confirm_password").value;

  // --- Validasi ---
  if (!username) {
    alert("Username must not be empty");
    return;
  }
  if (username.length < 4 || username.length > 20) {
    alert("Username must be 4-20 characters long");
    return;
  }
  if (!address) {
    alert("Address must not be empty");
    return;
  }
  if (!email) {
    alert("Email must not be empty");
    return;
  }
  if (!password) {
    alert("Password must not be empty");
    return;
  }
  if (!confirmPassword) {
    alert("Confirm password must not be empty");
    return;
  }
  if (password !== confirmPassword) {
    alert("Password and Confirm Password must match");
    return;
  }

  // --- Simpan ke localStorage ---
  localStorage.setItem("username", username);
  localStorage.setItem("address",  address);
  localStorage.setItem("email",    email);
  localStorage.setItem("password", password);

  alert("Registration successful!");
  console.log("Redirecting to login page…");
  setTimeout(() => {
    window.location.href = "./login.html";
  }, 1000);
};

document.getElementById("signup-form").onsubmit = register;