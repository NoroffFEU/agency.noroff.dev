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
        displayMessage("warning", "Passwords don't match!", "#confirm-message");
        return;
      } else {
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        const imageUrl = document.querySelector('#imageUrl').value;
        const data = { ...profile, imageUrl };
         try {
          // send it to Api
          await register(data);
        } catch (error) {
          // display error message here
          console.log('error:', error);
        }
      }
    });
  }
}
