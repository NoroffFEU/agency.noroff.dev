// Register form for applicant

import { register } from '../../api/auth/index.js';
import { displayMessage } from '../../ui/message/displayMessage.js';

export function setRegisterFormListenerApplicant() {
  const form = document.querySelector('#registerForm-applicant');
  const password = document.querySelector('#passwordStudent');
  const repeatPasssword = document.querySelector('#repPasswordStud');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (password.value !== repeatPasssword.value) {
        displayMessage('warning', "Passwords don't match!", '#confirm-message');
        return;
      } else {
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        const imageUrl = document.querySelector('#imageUrl').value;
        const fullName = document.querySelector('#fullName').value.split(' ');
        profile.firstName = fullName[0];
        profile.lastName = fullName.slice(1).join(' ');
        const data = { ...profile, imageUrl };
        // send it to Api
        const { error } = await register(data);
        // display error message here
        if (error) {
          return displayMessage('danger', error, '#confirm-message');
        }
        //show success message if there is no error
        displayMessage('success', `Registration successfull! You can now <a href="#">login</a>.`, '#confirm-message');
      }
    });
  }
}