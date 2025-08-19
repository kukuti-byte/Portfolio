// Simple script to show alert on form submit
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting TasteBite! 🍴");
});