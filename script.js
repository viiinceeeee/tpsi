// script.js

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validate name
  if (!nameInput.value.trim()) {
    alert("Please enter your name.");
    return;
  }

  // Validate email
  if (!isValidEmail(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate message
  if (!messageInput.value.trim()) {
    alert("Please enter your message.");
    return;
  }

  // Submit form if all fields are valid
  form.submit();
});

function isValidEmail(email) {
  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}