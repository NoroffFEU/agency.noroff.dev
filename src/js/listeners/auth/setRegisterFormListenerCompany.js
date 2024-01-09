// Register form for company

import { registerCompany } from '../../api/auth/index.js';

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
        // display error message here
        console.log('error:', error);
      }
    });
  }
}
