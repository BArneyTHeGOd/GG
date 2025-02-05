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
  const passwordContainer = document.getElementById('passwordContainer');
  const darkModeStatus = document.getElementById('darkModeStatus');
  const isDarkMode = root.style.getPropertyValue('--background') === '#092f5e';

  if (isDarkMode) {
    // Switch to light mode
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--button-bg', '#ff7a00');
    root.style.setProperty('--button-hover', '#ff3400');
    passwordContainer.classList.remove('dark-mode');
    darkModeStatus.textContent = "Dark mode is currently OFF.";
  } else {
    // Switch to dark mode
    root.style.setProperty('--background', '#092f5e');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--button-bg', '#ff7a00');
    root.style.setProperty('--button-hover', '#ff3400');
    passwordContainer.classList.add('dark-mode');
    darkModeStatus.textContent = "Dark mode is currently ON.";
  }
}

// Enable dark mode by default on page load
window.onload = function () {
  const root = document.documentElement;
  const passwordContainer = document.getElementById('passwordContainer');
  const darkModeStatus = document.getElementById('darkModeStatus');

  // Set dark mode by default
  root.style.setProperty('--background', '#092f5e');
  root.style.setProperty('--text-color', '#ffffff');
  root.style.setProperty('--button-bg', '#ff7a00');
  root.style.setProperty('--button-hover', '#ff3400');
  passwordContainer.classList.add('dark-mode');
  darkModeStatus.textContent = "Dark mode is currently ON.";
};
