/**
 * Validates the company name input.
 *
 * @param {HTMLInputElement} input - The company name input element.
 * @param {boolean} isTyping - True if the user is still typing; otherwise, false.
 * @returns {boolean} True if the company name is valid; otherwise, false.
 */
function validateSector(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  const isValidSector = input.value.trim() !== '';

  errorDiv.textContent = isValidSector ? '' : 'Sector is required.';
  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('alert', 'alert-danger', 'valid-feedback');

  if (!isValidSector && !isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidSector) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidSector && isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }

  return isValidSector;
}

/**
 * Validates the company name input.
 *
 * @param {HTMLInputElement} input - The company name input element.
 * @param {boolean} isTyping - True if the user is still typing; otherwise, false.
 * @returns {boolean} True if the company name is valid; otherwise, false.
 */
function validateCompanyName(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  const isValidCompanyName = input.value.trim() !== '';

  errorDiv.textContent = isValidCompanyName ? '' : 'Company name is required.';
  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('alert', 'alert-danger', 'valid-feedback');

  if (!isValidCompanyName && !isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidCompanyName) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidCompanyName && isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }

  return isValidCompanyName;
}

/**
 * Validates the password input.
 *
 * @param {HTMLInputElement} input - The password input element.
 * @param {boolean} isTyping - True if the user is still typing; otherwise, false.
 * @returns {boolean} True if the password is valid; otherwise, false.
 */

export function validatePassword(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  const isValidPassword = input.value.length >= 8;

  errorDiv.textContent = isValidPassword ? '' : 'Password must be at least 8 characters.';
  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('alert', 'alert-danger', 'valid-feedback');

  if (!isValidPassword && !isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidPassword) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidPassword && isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }

  return isValidPassword;
}

/**
 * Validates the repeat password input against the original password.
 *
 * @param {HTMLInputElement} passwordInput - The original password input element.
 * @param {HTMLInputElement} repeatPasswordInput - The repeat password input element.
 * @param {boolean} isTyping - True if the user is still typing; otherwise, false.
 * @returns {boolean} True if the passwords match; otherwise, false.
 */
function validateRepeatPassword(passwordInput, repeatPasswordInput, isTyping) {
  const errorDiv = repeatPasswordInput.nextElementSibling;
  const isValidRepeatPassword = repeatPasswordInput.value === passwordInput.value;

  if (repeatPasswordInput.value.trim() === '') {
    errorDiv.textContent = 'Please repeat the password.';
    errorDiv.classList.add('alert', 'alert-danger');
    repeatPasswordInput.classList.add('is-invalid');
    repeatPasswordInput.classList.remove('is-valid');
    return false;
  }

  errorDiv.textContent = isValidRepeatPassword ? '' : "Passwords don't match.";

  repeatPasswordInput.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('alert', 'alert-danger', 'valid-feedback');

  if (!isValidRepeatPassword && !isTyping) {
    repeatPasswordInput.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidRepeatPassword) {
    repeatPasswordInput.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidRepeatPassword && isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }

  return isValidRepeatPassword;
}

/**
 * Validates the full name input against a specified pattern.
 *
 * @param {HTMLInputElement} input - The full name input element.
 * @param {boolean} isTyping - Indicates whether the user is still typing.
 */
function validateFullName(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  const pattern = /^[a-zA-ZæøåÆØÅ-]+ [a-zA-ZæøåÆØÅ-]+$/;
  const inputValue = input.value.trim().replace(/\s+/g, ' ');
  const isValidFullName = pattern.test(inputValue);

  errorDiv.textContent = isValidFullName
    ? ''
    : 'Full Name must be in the format: Firstname Lastname';

  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('invalid-feedback', 'alert', 'alert-danger', 'valid-feedback');

  if (!isValidFullName && !isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidFullName) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidFullName && isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }
  return isValidFullName;
}

/**
 * Validates the email input against a specified pattern.
 *
 * @param {HTMLInputElement} input - The email input element.
 * @param {boolean} isTyping - True if the user is still typing; otherwise, false.
 * @returns {boolean} True if the email is valid; otherwise, false.
 */

export function validateEmail(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  const pattern = /^[\w\-.]+@(stud.)?noroff.no$/;
  const isValidEmail = pattern.test(input.value);

  errorDiv.textContent = isValidEmail
    ? ''
    : 'Invalid email address. Use a valid noroff.no or stud.noroff.no email.';

  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('alert', 'alert-danger', 'valid-feedback');

  if (!isValidEmail && !isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidEmail) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidEmail && isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }
  return isValidEmail;
}

/**
 * Validates the email input against a specified pattern.
 *
 * @param {HTMLInputElement} input - The email input element.
 * @param {boolean} isTyping - True if the user is still typing; otherwise, false.
 * @returns {boolean} True if the email is valid; otherwise, false.
 */
function validateCompanyEmail(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  const pattern = /^[\w\-.]+@[\w\-.]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = pattern.test(input.value);

  errorDiv.textContent = isValidEmail ? '' : 'Invalid email address.';

  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('alert', 'alert-danger', 'valid-feedback');

  if (!isValidEmail && !isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidEmail) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidEmail && isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }
  return isValidEmail;
}

export const inputs = {
  validateCompanyName,
  validateSector,
  validatePassword,
  validateRepeatPassword,
  validateFullName,
  validateEmail,
  validateCompanyEmail,
};
