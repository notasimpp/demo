function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    if (username === 'grishma' && password === '0918') {
        window.location.href = 'home.html';
        return false;
    } else {
        errorElement.textContent = 'Invalid username or password.';
        return false;
    }
}
