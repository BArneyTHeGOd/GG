function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'sk'; // Change this to your desired password

  if (password === correctPassword) {
    document.getElementById('passwordContainer').style.display = 'none';
    document.getElementById('editorContainer').style.display = 'block';
  } else {
    document.getElementById('message').innerText = 'Incorrect password. Access denied.';
  }
}
