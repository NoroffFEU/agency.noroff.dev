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

export async function registerCompany(data) {
  let token = data.registerToken;
  if (!token) {
    const loggedInUserToken = getToken();
    token = loggedInUserToken.replace(/^"|"$/g, ''); //Todo: This seems unnecessary. Should be handled in getToken() if needed.
  }
  
  const registerURL = apiUrl.toString() + companyUrl;

  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (!response.ok) {    
    throw new Error(json.message);
  }

  return json;
}