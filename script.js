function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'Skibidi'; // Change this to your desired password

  if (password === correctPassword) {
    document.getElementById('message').innerText = 'You have successfully entered the protected page!';
  } else {
    document.getElementById('message').innerText = 'Incorrect password. Access denied.';
  }
}
