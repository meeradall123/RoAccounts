function registerUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("signupError");

  if (username.length < 3 || password.length < 6) {
    error.textContent = "Username must be 3+ chars & password 6+ chars.";
    return false;
  }

  // Get existing users or empty array
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check for duplicate username
  const exists = users.find(u => u.username === username);
  if (exists) {
    error.textContent = "Username already taken.";
    return false;
  }

  // Add new user
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  error.textContent = "";
  showSignupNotification("Registered Successfully");
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

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    error.textContent = "Invalid credentials.";
    return false;
  }

  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(user)); // Optional: track current user

  error.textContent = "";
  showLoginNotification("Login Succeed");
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
