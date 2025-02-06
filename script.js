// Password check function
function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'dayone'; // Correct password
  const message = document.getElementById('message');

  if (password === correctPassword) {
    document.getElementById('passwordContainer').style.display = 'none';
    document.getElementById('editorContainer').style.display = 'flex'; // Show the editor container
  } else {
    message.textContent = "Incorrect password. Please try again.";
    message.style.color = "red";
  }
}

// Redirect to a website in a new tab
function redirectToWebsite(url) {
  window.open(url, '_blank');
}

// Toggle dark mode
function toggleDarkMode() {
  const root = document.documentElement;
  const darkModeStatus = document.getElementById('darkModeStatus');
  const editorContainer = document.getElementById('editorContainer');
  
  const isDarkMode = root.style.getPropertyValue('--background') === '#092f5e';

  if (isDarkMode) {
    // Switch to light mode
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--button-bg', '#007bff'); // Blue button
    root.style.setProperty('--button-hover', '#0056b3');
    editorContainer.classList.remove('dark-mode');
    darkModeStatus.textContent = "Dark mode is currently OFF.";
  } else {
    // Switch to dark mode
    root.style.setProperty('--background', '#092f5e');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--button-bg', '#ff7a00');
    root.style.setProperty('--button-hover', '#ff3400');
    editorContainer.classList.add('dark-mode');
    darkModeStatus.textContent = "Dark mode is currently ON.";
  }
}

// Enable dark mode by default on page load
window.onload = function () {
  const root = document.documentElement;
  const darkModeStatus = document.getElementById('darkModeStatus');
  root.style.setProperty('--background', '#092f5e');
  root.style.setProperty('--text-color', '#ffffff');
  root.style.setProperty('--button-bg', '#ff7a00');
  root.style.setProperty('--button-hover', '#ff3400');
  darkModeStatus.textContent = "Dark mode is currently ON.";
};
