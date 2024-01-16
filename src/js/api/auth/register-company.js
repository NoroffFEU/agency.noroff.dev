import { apiUrl, companyUrl } from '../constants.js';
import { getToken } from '../getToken.js';

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
  let token = profile.registerToken;
  if (!token) {
    const accessToken = getToken();
    token = accessToken.replace(/^"|"$/g, '');
  }
  
  console.log(profile);
  const registerURL = apiUrl.toString() + companyUrl;

  try {
    const response = await fetch(registerURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify(profile),
    });

    let result; // Declare the variable outside of the switch block

    switch (response.status) {
      case 201: // Status code for successful creation
        result = await response.json(); // Assign the value here
        // Redirect to login page after successful registration
        window.location.replace('/pages/auth/login/index.html');
        return result;
      default:
        // Handle API-specific errors
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    // Handle network or unexpected errors
    console.error('Registration error:', error);
    throw error; // Rethrow to allow error handling by the caller
  }
}
