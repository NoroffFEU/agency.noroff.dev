/**
 * Validates the password input.
 *
 * @param {HTMLInputElement} input - The password input element.
 * @returns {boolean} True if the password is valid; otherwise, false.
 */
function validatePassword(input) {
  const errorDiv = input.nextElementSibling;

  if (input.value.length < 8) {
    errorDiv.textContent = 'Password must be at least 8 characters.';
    return false;
  } else {
    errorDiv.textContent = '';
    return true;
  }
}

/**
 * Validates the repeat password input against the original password.
 *
 * @param {HTMLInputElement} passwordInput - The original password input element.
 * @param {HTMLInputElement} repeatPasswordInput - The repeat password input element.
 * @returns {boolean} True if the passwords match; otherwise, false.
 */
function validateRepeatPassword(passwordInput, repeatPasswordInput) {
  const errorDiv = repeatPasswordInput.nextElementSibling;

  if (repeatPasswordInput.value !== passwordInput.value) {
    errorDiv.textContent = "Passwords don't match!";
    return false;
  } else {
    errorDiv.textContent = '';
    return true;
  }
}

/**
 * Validates the full name input against a specified pattern.
 *
 * @param {HTMLInputElement} input - The full name input element.
 * @returns {boolean} True if the full name is in the correct format; otherwise, false.
 */
function validateFullName(input) {
  const errorDiv = input.nextElementSibling;
  const pattern = /^[a-zA-ZæøåÆØÅ]+( [a-zA-ZæøåÆØÅ]+)+$/;

  if (!pattern.test(input.value)) {
    errorDiv.textContent = 'Full Name must be in the format: First Last';
    return false;
  } else {
    errorDiv.textContent = '';
    return true;
  }
}

/**
 * Validates the email input against a specified pattern.
 *
 * @param {HTMLInputElement} input - The email input element.
 * @returns {boolean} True if the email is valid; otherwise, false.
 */
function validateEmail(input) {
  const errorDiv = input.nextElementSibling;
  const pattern = /^[\w\-.]+@(stud.)?noroff.no$/;

  if (!pattern.test(input.value)) {
    errorDiv.textContent = 'Invalid email address. Use a valid noroff.no or stud.noroff.no email.';
    return false;
  } else {
    errorDiv.textContent = '';
    return true;
  }
}
export const inputs = {
  validatePassword,
  validateRepeatPassword,
  validateFullName,
  validateEmail,
};
