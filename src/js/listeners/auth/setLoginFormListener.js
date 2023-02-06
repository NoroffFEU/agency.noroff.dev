import { login } from '../../api/auth/index.js';

// Author: Truls Haakenstad @Menubrea
// Dev-team: Frontend - User

/* To future Developer
  If you run into issues with this code, I would start with looking at #rememberMe in login/index.html.
  It will likely have to be ommited from the payload or handled in some other way.
*/

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
