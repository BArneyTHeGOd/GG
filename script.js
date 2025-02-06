// Password check function
function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'dayone'; // Set the correct password
  const message = document.getElementById('message');

  if (password === correctPassword) {
    // Hide the password container and show the editor container
    document.getElementById('passwordContainer').style.display = 'none';
    document.getElementById('editorContainer').style.display = 'block';
  } else {
    // Display an error message if the password is incorrect
    message.textContent = "Incorrect password. Please try again.";
    message.style.color = "red";
  }
}

// Redirect to a URL in a new tab
function redirectToWebsite(url) {
  window.open(url, '_blank');
}

// Toggle dark mode function
function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.contains('dark-mode');

  if (isDarkMode) {
    // Switch to light mode
    body.classList.remove('dark-mode');
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000000';
  } else {
    // Switch to dark mode
    body.classList.add('dark-mode');
    body.style.backgroundColor = '#092f5e';
    body.style.color = '#ffffff';
  }
}
