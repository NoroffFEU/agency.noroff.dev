// Register form for company

import { registerCompany } from '../../api/auth/index.js';

export function setRegisterFormListenerCompany() {
  const form = document.querySelector('#registerForm-company');
  const userFeedback = document.querySelector('.user-feedback');

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
        window.location.replace('/pages/auth/login/');
      } catch (error) {
        userFeedback.innerText = 'An error occurred. Please check the inputs';
        console.warn('error:', error);
      }
    });
  }
}
