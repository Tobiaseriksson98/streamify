

// Get references to the span and password input elements
var span = document.getElementById('togglePassword');
var passwordInput = document.getElementById('password');

// Add a click event listener to the span element
span.addEventListener('click', function() {
  // Check if the password input is currently visible
  if (passwordInput.type === 'password') {
    // If it's hidden, change the type to 'text' to make it visible
    passwordInput.type = 'text';
    // Change the text content of the span to 'visibility'
    span.textContent = 'visibility';
  } else {
    // If it's visible, change the type back to 'password' to hide it
    passwordInput.type = 'password';
    // Change the text content of the span to 'visibility_off'
    span.textContent = 'visibility_off';
  }
});
 
    
  