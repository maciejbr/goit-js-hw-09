const form = document.querySelector('.feedback-form');
const email = document.querySelector('.email');
const textarea = document.querySelector('.message');

email.value = localStorage.getItem('email') || '';
textarea.value = localStorage.getItem('message') || '';

form.addEventListener('input', evt => {
  if (evt.target.name === 'email') {
    localStorage.setItem('email', evt.target.value.trim());
  }
  if (evt.target.name === 'message') {
    localStorage.setItem('message', evt.target.value.trim());
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(email.value);
  console.log(textarea.value);
  localStorage.clear();
  form.reset();
});
