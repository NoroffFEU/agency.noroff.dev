import { login } from '../auth/index.js';


// Author: Truls Haakenstad @Menubrea
// Dev-team: Frontend - User


/**
 * Listener for handling login functionality
 */
export function setLoginFormListener() {
  const form = document.querySelector('#loginForm');

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
