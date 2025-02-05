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
  document.body.classList.toggle('dark-mode');
}
