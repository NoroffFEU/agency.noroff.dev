import { apiPath } from '../constants.js';

const method = 'PUT';
const action = '/user/';

/**
 * This function sends a PUT request to the API to update the company profile 
 * 
 * @param {Object} profile The updated company profile data
 * @returns {Promise<Object>} A Promise that resolves with the updated company profile
 * @throws {Error} If the 'id' is missing, the API request fails, or if it returns an error status 
 */

export async function editCompany(profile) {
  const { id } = profile;
  const profileURL = apiPath + action + `/${id}`;
  const body = JSON.stringify(profile);
  const options = {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(profileURL, options);
    const profile = await response.json();

    switch (response.status) {
      case 200: {
        alert('Update was successful');
        return profile;
      }
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(err);
  }
}
