function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'skbidi'; // Change this to your desired password

  if (password === correctPassword) {
    document.getElementById('message').innerText = 'Open seseme!';
  } else {
    document.getElementById('message').innerText = 'Incorrect password. Nice try u monkey.';
  }
}
