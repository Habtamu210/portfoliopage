const contactForm = document.getElementById('form');
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Message = document.getElementById('message');

contactForm.addEventListener('input', () => {
  const contactData = {
    username: Name.value,
    email: Email.value,
    message: Message.value,
  };
  localStorage.setItem('userData', JSON.stringify(contactData));
});

const GetDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
Name.value = GetDataFromLocalStorage.username;
Email.value = GetDataFromLocalStorage.email;
Message.value = GetDataFromLocalStorage.message;
