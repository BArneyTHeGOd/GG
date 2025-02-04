function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'dayone'; // Change this to your desired password

  if (password === correctPassword) {
    document.getElementById('passwordContainer').style.display = 'none';
