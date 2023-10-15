import { apiUrl } from '../constants.js';

const action = 'auth/register';
const method = 'post';

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
  const registerURL = apiUrl + action;

  try {
    const response = await fetch(registerURL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(profile),
    });

    switch (response.status) {
      case 201:
        const result = await response.json();
        window.location.replace('/pages/auth/login/index.html');
        return result;
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}
