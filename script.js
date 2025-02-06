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
  const progressText = document.getElementById('progressText');
  const darkModeStatus = document.getElementById('darkModeStatus');

  const isDarkMode = root.classList.contains('light-mode');
  if (isDarkMode) {
    root.classList.remove('light-mode');
    darkModeStatus.textContent = "Dark mode is currently ON.";
    progressText.style.color = "white";
  } else {
    root.classList.add('light-mode');
    darkModeStatus.textContent = "Dark mode is currently OFF.";
    progressText.style.color = "black";
  }
}

// Enable dark mode by default on page load
window.onload = function () {
  const root = document.documentElement;
  root.classList.remove('light-mode'); // Default is dark mode
  document.getElementById('progressText').style.color = "white"; // Text color in dark mode
};
