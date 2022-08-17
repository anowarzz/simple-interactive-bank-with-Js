// ------------- Login Page  --------------------- //

// Stetp-1: Add click event handler with the submit button.

document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-2: Get the mail address inside the email field
  // Always remember to use .value to get text from an input field.

  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // Step-3: Get Password
  // 3.(a) set id on the html element
  // 3.(b) get the element
  // 3.(c) get the value from the element

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // DANGER! : DO NOT VERIFY  EMAIL & PASSWORD ON THE CLIENT SIDE .
  // Step-4: verify email and password and check whether valid user or not.

  if (email === "baaper@shontan.com" && password === "secretbank") {
    window.location.href = "bank.html";
  } else {
    alert("Kire Beta Tor Ki Nijer Password O Mone Nai ?? Dure Giya Mooor");
  }
});
