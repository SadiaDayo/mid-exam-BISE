document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");
    var loginButton = document.getElementById("loginBtn");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting in the default way

        // Perform any login or form submission logic here if needed

        // Redirect to the login.html page
        window.location.href = "index.html";
    });
});
