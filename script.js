function registerUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("signupError");

  if (username.length < 3  password.length < 6) {
    error.textContent = "Username must be 3+ chars & password 6+ chars.";
    return false;
  }

  // Save credentials
  localStorage.setItem("user", JSON.stringify({ username, password }));
  error.textContent = "";

  showSignupNotification("Registered Successfully");
  return false;
}

function showSignupNotification(message) {
  const notification = document.getElementById("signupNotification");
  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
    window.location.href = "login.html"; // Redirect to login after showing message
  }, 3000);
}

// Login function (if needed on the same script)
function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const error = document.getElementById("loginError");

  const stored = JSON.parse(localStorage.getItem("user"));

  if (!stored  username !== stored.username || password !== stored.password) {
    error.textContent = "Invalid credentials.";
    return false;
  }

  localStorage.setItem("loggedIn", "true");
  error.textContent = "";
  showLoginNotification("Login Succeed");
  return false;
}

function showLoginNotification(message) {
  const notification = document.getElementById("loginNotification");
  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
    window.location.href = "index2.html"; // Redirect after login
  }, 3000);
}
