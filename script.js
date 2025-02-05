// Toggle dark mode
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
    localStorage.setItem('darkMode', 'off');
  } else {
    // Switch to dark mode
    root.style.setProperty('--background', '#092f5e');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--button-bg', '#ff7a00');
    root.style.setProperty('--button-hover', '#ff3400');
    passwordContainer.classList.add('dark-mode');
    darkModeStatus.textContent = "Dark mode is currently ON.";
    localStorage.setItem('darkMode', 'on');
  }
}

// Enable dark mode by default on page load, based on user preference
window.onload = function () {
  const root = document.documentElement;
  const passwordContainer = document.getElementById('passwordContainer');
  const darkModeStatus = document.getElementById('darkModeStatus');
  
  const darkMode = localStorage.getItem('darkMode');
  
  if (darkMode === 'on') {
    root.style.setProperty('--background', '#092f5e');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--button-bg', '#ff7a00');
    root.style.setProperty('--button-hover', '#ff3400');
    passwordContainer.classList.add('dark-mode');
    darkModeStatus.textContent = "Dark mode is currently ON.";
  } else {
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--button-bg', '#ff7a00');
    root.style.setProperty('--button-hover', '#ff3400');
    passwordContainer.classList.remove('dark-mode');
    darkModeStatus.textContent = "Dark mode is currently OFF.";
  }
};

// Password check function
function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'dayone';
  const message = document.getElementById('message');

  if (password === correctPassword) {
    document.getElementById('passwordContainer').style.display = 'none';
    document.getElementById('editorContainer').style.display = 'block';
  } else {
    message.textContent = "Incorrect password. Please try again.";
    message.style.color = "red";
    document.getElementById('passwordInput').value = ''; // Clear input field after wrong password
  }
}

// Redirect to a URL in a new tab
function redirectToWebsite(url) {
  window.open(url, '_blank');
}
