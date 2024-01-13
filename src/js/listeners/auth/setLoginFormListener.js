import { login } from '../../api/auth/index.js';

// Author: Truls Haakenstad @Menubrea
// Dev-team: Frontend - User

// Author: Joakim Tveter @joakimtveter
// Dev-team: origin-bliss

/**
 * Listener for handling login functionality
 */
export function setLoginFormListener() {
  const emailInput = document.querySelector('#email');
  const storedEmail = localStorage.getItem('email');
  const form = document.querySelector('#loginForm');

  if (storedEmail && emailInput) {
    emailInput.value = JSON.parse(storedEmail);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      login(profile);
    });
  }
}
