function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'dayone'; // Change this to your desired password

  if (password === correctPassword) {
    document.getElementById('passwordContainer').style.display = 'none';
    document.getElementById('editorContainer').style.display = 'flex';
  } else {
    document.getElementById('message').innerText = 'Incorrect password. Access denied.';
  }
}

function redirectToWebsite(url) {
  window.location.href = url;
}

