import { apiUrl } from '../constants.js';

const action = '/auth/register';
const method = 'post';

/**
 * Register a company by sending a POST request to the API 
 * 
 * 
 * @param {Object} profile - The profile data for the company to be registered.
 * @param {string} profile.name - The name of the company.
 * @param {string} profile.email - The email of the company.
 * @param {string} profile.password - The password for the company's account.
 * @param {string} profile.contactPerson - The name of the company's contact person.
 * @param {string} profile.contactNumber - The contact number of the company.
 * @returns {Promise<Object>} - A Promise that resolves with a registration result if successful.
 * @throws {Error} Throws error if the registration request fails or returns error status.
 */

export async function registerCompany(profile) {
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
