import { registerUser } from '../../api/auth/index.js';
import { message } from '../../utilities/message/message.js';
import { inputs } from './validateInputs.js';

/**
 * function that first makes constants from IDs and then uses validation functions to validate the input from the constants,
 * it then gives the user an error message if the validation fails or it stores the user data given, and registers the user
 * if the registration is successful the user gets a success message
 */
export function setRegisterFormListenerApplicant() {
  const form = document.querySelector('#registerForm-applicant');
  const password = document.querySelector('#passwordStudent');
  const repeatPassword = document.querySelector('#repPasswordStud');
  const firstName = document.querySelector('#firstName');
  const lastName = document.querySelector('#lastName');
  const email = document.querySelector('#emailStudent');

  if (form) {
    password.addEventListener('blur', () => {
      inputs.validatePassword(password, false);
    });
    password.addEventListener('input', () => {
      inputs.validatePassword(password, true);
    });

    repeatPassword.addEventListener('blur', () => {
      inputs.validateRepeatPassword(password, repeatPassword, false);
    });
    repeatPassword.addEventListener('input', () => {
      inputs.validateRepeatPassword(password, repeatPassword, true);
    });

    firstName.addEventListener('input', () => {
      inputs.validateFirstName(firstName, true);
    });
    firstName.addEventListener('blur', () => {
      inputs.validateFirstName(firstName, false);
    });

    lastName.addEventListener('input', () => {
      inputs.validateLastName(lastName, true);
    });
    lastName.addEventListener('blur', () => {
      inputs.validateLastName(lastName, false);
    });

    email.addEventListener('blur', () => {
      inputs.validateEmail(email, false);
    });
    email.addEventListener('input', () => {
      inputs.validateEmail(email, true);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const isPasswordValid = inputs.validatePassword(password);
      const isRepeatPasswordValid = inputs.validateRepeatPassword(password, repeatPassword);
      const isFirstNameValid = inputs.validateFirstName(firstName);
      const isLastNameValid = inputs.validateLastName(lastName);
      const isEmailValid = inputs.validateEmail(email);

      if (!isPasswordValid || !isRepeatPasswordValid || !isFirstNameValid || !isLastNameValid || !isEmailValid) {
        message("danger", "Invalid registration credentials. Please try again", "#errorMessage");
        return;
      }

      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const imageUrl = document.querySelector('#imageUrl').value;
      const data = { ...profile, imageUrl };

      const { error } = await registerUser(data);
      if (error) {
        message("danger", "An error occurred when attempting to register user. Please try again", "#errorMessage");
        console.error(error);
        return;
      }
      message("success", "Registration successful! You can now login.", "#errorMessage");
      
      // Construct the login path based on the current URL
      const currentPath = window.location.pathname;
      const loginPath = currentPath.replace('/register/applicant', '/login');
    
      // Redirect to the login page after successful registration
      window.location.href = loginPath;
    });
  }
}
