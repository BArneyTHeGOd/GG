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
  const root = document.documentElement;
  const isDarkMode = root.style.getPropertyValue('--background') === '#092f5e';

  if (isDarkMode) {
    // Switch to light mode
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
  } else {
    // Switch to dark mode
    root.style.setProperty('--background', '#092f5e');
    root.style.setProperty('--text-color', '#ffffff');
  }
}

// Enable dark mode by default on page load
window.onload = function () {
  const root = document.documentElement;
  root.style.setProperty('--background', '#092f5e');
  root.style.setProperty('--text-color', '#ffffff');
};
