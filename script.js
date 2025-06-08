// Register new user
function registerUser() {
  const username = document.getElementById("username")?.value.trim();
  const password = document.getElementById("password")?.value.trim();
  const error = document.getElementById("signupError");

  if (!error) return false;

  if (!username || !password) {
    error.textContent = "Both fields are required.";
    return false;
  }

  // Basic validation
  if (username.length < 3 || password.length < 6) {
    error.textContent = "Username must be at least 3 characters and password at least 6.";
    return false;
  }

  let users = [];
  try {
    users = JSON.parse(localStorage.getItem("users")) || [];
  } catch (e) {
    console.error("Error parsing users from localStorage:", e);
    users = [];
  }

  // Check if username already exists
  if (users.some(user => user.username === username)) {
    error.textContent = "Username is already taken.";
    return false;
  }

  // Save new user
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  error.textContent = "";

  showSignupNotification("Registered Successfully");

  // Clear input fields after registration success (optional)
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  return false; // To prevent form submission if used as onsubmit
}

// Show signup success notification
function showSignupNotification(message) {
  const notification = document.getElementById("signupNotification");
  if (!notification) return;

  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
    window.location.href = "login.html";
  }, 3000);
}

// Login existing user
function loginUser() {
  const username = document.getElementById("loginUsername")?.value.trim();
  const password = document.getElementById("loginPassword")?.value.trim();
  const error = document.getElementById("loginError");

  if (!error) return false;

  if (!username || !password) {
    error.textContent = "Both fields are required.";
    return false;
  }

  let users = [];
  try {
    users = JSON.parse(localStorage.getItem("users")) || [];
  } catch (e) {
    console.error("Error reading users:", e);
    error.textContent = "Unexpected error occurred.";
    return false;
  }

  const matchedUser = users.find(user => user.username === username && user.password === password);

  if (!matchedUser) {
    error.textContent = "Invalid username or password.";
    return false;
  }

  // Save login state
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(matchedUser));
  localStorage.setItem("currentUsername", matchedUser.username);

  error.textContent = "";

  showLoginNotification("Login Successful");

  // Clear input fields after login success (optional)
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";

  return false; // To prevent form submission if used as onsubmit
}

// Show login success notification
function showLoginNotification(message) {
  const notification = document.getElementById("loginNotification");
  if (!notification) return;

  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
    window.location.href = "index2.html";
  }, 3000);
}

// Logout function
function logoutUser() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentUsername");
  window.location.href = "login.html";
}
