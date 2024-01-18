import { login } from '../../api/auth/index.js';
import { validateEmail } from './validateInputs.js';
import { validatePassword } from './validateInputs.js';


// Author: Truls Haakenstad @Menubrea
// Dev-team: Frontend - User

// Author: Joakim Tveter @joakimtveter
// Dev-team: origin-bliss

/**
 * Listener for handling login functionality
 */
export function setLoginFormListener() {
  const emailInput = document.querySelector('#email');
  const passwordInput = document.getElementById('password');
  const storedEmail = localStorage.getItem('email');
  const form = document.querySelector('#loginForm');

  emailInput.addEventListener('blur', () => {
    const emailField = document.getElementById('email')
    validateEmail(emailField);
  })

  passwordInput.addEventListener('blur', () => {
    const passwordField = document.getElementById('password')
    validatePassword(passwordField);
  })

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
