// Register form for company

import { registerCompany } from '../../api/auth/index.js';
import { message } from '../../utilities/message/message.js';

export function setRegisterFormListenerCompany() {
  const form = document.querySelector('#registerForm-company');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const imageUrl = document.querySelector('#imageUrl').value;
      const data = { ...profile, imageUrl };

      try {
        // send it to Api
        await registerCompany(data);
      } catch (error) {
        message("danger", "An error occured when attempting to register company. Please try again", "#errorMessage");
        console.error(error)
      }
    });
  }
}
