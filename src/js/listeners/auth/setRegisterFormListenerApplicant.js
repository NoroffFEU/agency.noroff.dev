import { registerUser } from '../../api/auth/index.js';
import { displayMessage } from '../../ui/message/displayMessage.js';

export function setRegisterFormListenerApplicant() {
  const form = document.querySelector('#registerForm-applicant');
  const password = document.querySelector('#passwordStudent');
  const repeatPassword = document.querySelector('#repPasswordStud');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (password.value !== repeatPassword.value) {
        displayMessage('warning', "Passwords don't match!", '#confirm-message');
        return;
      }
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const imageUrl = document.querySelector('#imageUrl').value;
      const fullName = document.querySelector('#fullName').value.split(' ');
      profile.firstName = fullName[0];
      profile.lastName = fullName.slice(1).join(' ');
      const data = { ...profile, imageUrl };

      const { error } = await registerUser(data);
      if (error) {
        return displayMessage('danger', error, '#confirm-message');
      }
      displayMessage(
        'success',
        `Registration successful! You can now <a href="/pages/auth/login/index.html">login</a>.`,
        '#confirm-message'
      );
    });
  }
}
