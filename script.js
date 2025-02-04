function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = 'dayone';

    if (password === correctPassword) {
        document.getElementById('passwordContainer').style.display = 'none';
        document.getElementById('editor
