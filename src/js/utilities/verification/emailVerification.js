// Author Hans Marius Andreassen - Team Vettakollen

/**
 * Validates if the email is in a correct format.
 *
 * @param {string} email - Email to be validated.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
