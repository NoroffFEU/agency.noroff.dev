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
 * Validates the first name input against a specified pattern.
 * @param {HTMLInputElement} input - The first name input element.
 * @param {boolean} isTyping - Indicates whether the user is still typing.
 */
function validateFirstName(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  const pattern = /^[A-Za-zÆØÅæøå]+$/; // Allows only letters
  const inputValue = input.value.trim();
  const isValidFirstName = pattern.test(inputValue);

  errorDiv.textContent = isValidFirstName ? '' : 'First Name should only contain letters.';

  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('invalid-feedback', 'alert', 'alert-danger', 'valid-feedback');

  if (!isValidFirstName && isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidFirstName) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidFirstName && !isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }
  return isValidFirstName;
}

/**
 * Validates the last name input against a specified pattern.
 * @param {HTMLInputElement} input - The last name input element.
 * @param {boolean} isTyping - Indicates whether the user is still typing.
 */
function validateLastName(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  const pattern = /^[A-Za-zÆØÅæøå]+$/; // Allows only letters
  const inputValue = input.value.trim();
  const isValidLastName = pattern.test(inputValue);

  errorDiv.textContent = isValidLastName ? '' : 'Last Name should only contain letters.';

  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('invalid-feedback', 'alert', 'alert-danger', 'valid-feedback');

  if (!isValidLastName && isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidLastName) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidLastName && !isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }
  return isValidLastName;
}

function validateUserName(input, isTyping) {
  const errorDiv = input.nextElementSibling;
  if (!errorDiv) {
    console.error('Error div not found for userName input');
    return false;
  }

  const pattern = /^[A-Za-zÆØÅæøå]+ [A-Za-zÆØÅæøå]+$/; // First name and last name separated by a space
  const inputValue = input.value.trim();
  const isValidUserName = pattern.test(inputValue);

  errorDiv.textContent = isValidUserName ? '' : 'Please enter your full name.';

  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.classList.remove('invalid-feedback', 'alert', 'alert-danger', 'valid-feedback');

  if (!isValidUserName && !isTyping) {
    input.classList.add('is-invalid');
    errorDiv.classList.add('alert', 'alert-danger');
  } else if (isValidUserName) {
    input.classList.add('is-valid');
    errorDiv.classList.add('valid-feedback');
  } else if (!isValidUserName && isTyping) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('alert', 'alert-danger');
  }

  return isValidUserName;
}

// Export both functions so other files (like setRegisterFormListenerApplicant.js) can use them
export { validateFirstName, validateLastName };

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
  validateFirstName,
  validateLastName,
  validateUserName,
  validateEmail,
  validateCompanyEmail,
};
