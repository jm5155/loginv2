const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    errorMsg.style.display = 'block';
    return;
  }

  errorMsg.style.display = 'none';
  // Placeholder: replace with real authentication logic
  alert('Logging in as ' + email);
});
