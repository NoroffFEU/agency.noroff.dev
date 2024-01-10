import { apiPath } from '../constants.js';

const action = '/users';
const method = 'POST';

/**
 *
 * @param {Object} profile - The profile data for the user to be registered.
 * @param {string} profile.username - The username of the user.
 * @param {string} profile.email - The email of the user.
 * @param {string} profile.password - The password of the user.
 * @returns {Promise<Object>} A Promise that resolves with the registration result if successful.
 * @throws {Error} Throws error if the registration request fails or returns error status.
 */
export async function register(profile) {
  let data, error;
  const registerURL = apiPath + action;

  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    mode: 'cors',
    body: JSON.stringify(profile),
  });

  const json = await response.json();

  if (response.ok) {
    data = json;
  } else {
    error = extractError(json);
  }

  return { data, error };
}

function extractError(responseData) {
  if (responseData && responseData.errors && Array.isArray(responseData.errors)) {
    return responseData.errors.map((error) => error.message).join('\n');
  }
  return 'There was an error processing the request.';
}
