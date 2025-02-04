function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'myPassword'; // Change this to your desired password

  if (password === correctPassword) {
    document.getElementById('passwordContainer').style.display = 'none';
    document.getElementById('editorContainer').style.display = 'block';
  } else {
    document.getElementById('message').innerText = 'Incorrect password. Access denied.';
  }
}

function redirectToWebsite(url) {
  // Redirect to the specified external URL
  window.location.href = url;
}
