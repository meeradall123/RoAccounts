<script>
  // Register new user
  function registerUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("signupError");

    // Basic validation
    if (username.length < 3 || password.length < 6) {
      error.textContent = "Username must be at least 3 characters and password at least 6.";
      return false;
    }

    // Load existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

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
    return false;
  }

  // Display signup success message
  function showSignupNotification(message) {
    const notification = document.getElementById("signupNotification");
    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
      window.location.href = "login.html"; // Redirect to login page
    }, 3000);
  }

  // Login existing user
  function loginUser() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (!matchedUser) {
      error.textContent = "Invalid username or password.";
      return false;
    }

    // Mark as logged in and store current user
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(matchedUser));
    localStorage.setItem("currentUsername", matchedUser.username); // ✅ Store separately for easier access

    error.textContent = "";
    showLoginNotification("Login Successful");
    return false;
  }

  // Display login success message
  function showLoginNotification(message) {
    const notification = document.getElementById("loginNotification");
    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
      window.location.href = "index2.html"; // Redirect to home page
    }, 3000);
  }

  // Logout function
  function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUsername"); // ✅ Clear username on logout
    window.location.href = "login.html";
  }
</script>
