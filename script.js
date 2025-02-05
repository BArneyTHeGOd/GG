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
  }
}

function redirectToWebsite(url) {
  window.open(url, '_blank');
}

function toggleDarkMode() {
  const root = document.documentElement;
  const isDarkMode = root.style.getPropertyValue('--background') === '#092f5e';

  if (isDarkMode) {
    // Switch to Light Mode
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--button-bg', '#007bff');
    root.style.setProperty('--button-hover', '#0056b3');
  } else {
    // Switch to Dark Mode
    root.style.setProperty('--background', '#092f5e');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--button-bg', '#ff7a00');
    root.style.setProperty('--button-hover', '#ff3400');
  }
}
