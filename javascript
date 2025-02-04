document.addEventListener('DOMContentLoaded', function() {
  const password = prompt('Please enter the password:');
  const correctPassword = 'myPassword'; // Change this to your desired password

  if (password === correctPassword) {
    document.getElementById('message').innerText = 'You have successfully entered the protected page!';
  } else {
    document.getElementById('message').innerText = 'Incorrect password. Access denied.';
  }
});
