import { findUser, isUserAdmin } from "./userData.js";

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupButton = document.getElementById("signupButton");
    const errorDiv = document.getElementById("error");

    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const userExists = await findUser(email, password);
            // const userAuthority = await isUserAdmin(email);

            if (!userExists) {
                errorDiv.textContent = "Invalid Credentials";
                return;
            }

            
            window.location.href = "userHome.html"
            // if (userAuthority == 0) {
            //     window.location.href = "userHome.html";
            // }
            // if (userAuthority == 1) {
            //     window.location.href = "AdminHome.html"
            // }
        });
    }

    if (signupButton) {
        signupButton.addEventListener("click", function () {
            window.location.href = "signup.html";
        });
    }
});