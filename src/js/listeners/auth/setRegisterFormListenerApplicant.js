import { registerUser } from '../../api/auth/index.js';
import { message } from '../../utilities/message/message.js';
import { inputs } from './validateInputs.js';
/**
 * function that first makes constants from IDs and then uses validation functions to validate the input from the constants,
 * it then gives the user an error message if the validation fails or it stores the user data given, and register the user
 * if the registration is successful the user gets a success message
 */
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
        message("danger", "Invalid registration credentials. Please try again", "#errorMessage");
        return;
      }

      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const imageUrl = document.querySelector('#imageUrl').value;
      const fullNameSplit = fullName.value.split(' ');
      profile.firstName = fullNameSplit[0];
      profile.lastName = fullNameSplit.slice(1).join(' ');
      const data = { ...profile, imageUrl };

      const { error } = await registerUser(data);
      if (error) {
        message("danger", "An error occured when attempting to register user. Please try again", "#errorMessage");
        console.error(error);
        return;
      }
      message("success", "Registration successful! You can now login.", "#errorMessage");
    });
  }
}
