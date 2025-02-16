import { addUser } from './userData.js';

document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorDiv = document.getElementById("error"); // Ensure this element exists in your HTML

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,30}$/;

    if (!emailRegex.test(email)) {
        errorDiv.textContent = "Invalid email format.";
        return;
    }
    if (!passwordRegex.test(password)) {
        errorDiv.textContent = "Password must have 1 uppercase, 1 lowercase, 1 special character, and be 8-30 characters long.";
        return;
    }
    if (password !== confirmPassword) {
        errorDiv.textContent = "Passwords do not match.";
        return;
    }

    const user = {
        customerName: document.getElementById("customerName").value,
        email: email,
        countryCode: document.getElementById("countryCode").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        userId: document.getElementById("signupUserId").value,
        password: password,
        preferences: document.getElementById("preferences").value,
        isAdmin: 0,
    };

    if (addUser === 'function') {
        addUser(user);
    }
    // addUser(user);

    alert("Consumer Registration Successful.\n\nCustomer Username: " + user.userId + "\nCustomer Name: " + user.customerName + "\nEmail: " + user.email);
    window.location.href = "index.html";
});