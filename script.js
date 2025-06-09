function registerUser() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("signupError");

  if (!usernameInput || !passwordInput || !error) {
    console.error("Required elements missing in the DOM.");
    return false;
  }

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username.length < 3 || password.length < 6) {
    error.textContent = "Username must be 3+ chars & password 6+ chars.";
    return false;
  }

  // Save credentials as an object in localStorage
  localStorage.setItem("user", JSON.stringify({ username, password }));

  error.textContent = "";
  usernameInput.value = "";
  passwordInput.value = "";

  showSignupNotification("Registered Successfully");
  return false; // Prevent form submission
}

function showSignupNotification(message) {
  const notification = document.getElementById("signupNotification");
  if (!notification) return;

  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
    window.location.href = "login.html"; // Redirect to login page
  }, 3000);
}

function loginUser() {
  const usernameInput = document.getElementById("loginUsername");
  const passwordInput = document.getElementById("loginPassword");
  const error = document.getElementById("loginError");

  if (!usernameInput || !passwordInput || !error) {
    console.error("Required elements missing in the DOM.");
    return false;
  }

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const stored = JSON.parse(localStorage.getItem("user"));

  if (!stored || username !== stored.username || password !== stored.password) {
    error.textContent = "Invalid credentials.";
    return false;
  }

  localStorage.setItem("loggedIn", "true");
  error.textContent = "";
  usernameInput.value = "";
  passwordInput.value = "";

  showLoginNotification("Login Succeed");
  return false; // Prevent form submission
}

function showLoginNotification(message) {
  const notification = document.getElementById("loginNotification");
  if (!notification) return;

  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
    window.location.href = "./Products"; // Redirect after login
  }, 3000);

  // Check if user is logged in
const username = localStorage.getItem("loggedInUser");

if (username) {
  document.getElementById("username").textContent = username;
  document.getElementById("user-info").style.display = "block";
} else {
  // Redirect to login page if not logged in
  window.location.href = "./login";
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "./loginl";
}

}
