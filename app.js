const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Dummy credentials for demo purposes
const validUsername = "employee1";
const validPassword = "password123";

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === validUsername && password === validPassword) {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";
        // Simulate a redirect
        setTimeout(() => {
            window.location.href = "dashboard.html"; // You can create a simple dashboard page if needed
        }, 1500);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});
