import { registerUser } from '../../api/auth/index.js';
import { displayMessage } from '../../ui/message/displayMessage.js';
import { inputs } from './validateInputs.js';

export function setRegisterFormListenerApplicant() {
  const form = document.querySelector('#registerForm-applicant');
  const password = document.querySelector('#passwordStudent');
  const repeatPassword = document.querySelector('#repPasswordStud');
  const fullName = document.querySelector('#fullName');
  const email = document.querySelector('#emailStudent');

  if (form) {
    password.addEventListener('blur', () => {
      inputs.validatePassword(password);
    });

    repeatPassword.addEventListener('blur', () => {
      inputs.validateRepeatPassword(password, repeatPassword);
    });

    fullName.addEventListener('blur', () => {
      inputs.validateFullName(fullName);
    });

    email.addEventListener('blur', () => {
      inputs.validateEmail(email);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const isPasswordValid = inputs.validatePassword(password);
      const isRepeatPasswordValid = inputs.validateRepeatPassword(password, repeatPassword);
      const isFullNameValid = inputs.validateFullName(fullName);
      const isEmailValid = inputs.validateEmail(email);

      if (!isPasswordValid || !isRepeatPasswordValid || !isFullNameValid || !isEmailValid) {
        return;
      }

      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const imageUrl = document.querySelector('#imageUrl').value;
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
