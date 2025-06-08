function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const error = document.getElementById("loginError");

  const stored = JSON.parse(localStorage.getItem("user"));

  if (!stored || username !== stored.username || password !== stored.password) {
    error.textContent = "Invalid credentials.";
    return false;
  }

  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("currentUsername", username); // ✅ Save logged in username
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
