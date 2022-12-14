const form = document.forms[0];
const email = document.getElementById('email');
const error = document.getElementById('error');
const message = document.querySelector('.error-message');
form.addEventListener('submit', (event) => {
  const messageWhileError = [];
  if (email.value.match(/[A-Z]/)) {
    messageWhileError.push('Email should be writen in small leter.');
    error.innerHTML = messageWhileError.join(', ');
    message.style.display = 'block';
    event.preventDefault();
    event.stopPropagation();
  }
});