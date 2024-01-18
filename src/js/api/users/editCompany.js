import { apiPath, companyUrl } from '../constants.js';
import { message } from '../../utilities/message/message.js';
import { getToken } from '../getToken.js';



/**
 * This function sends a PUT request to the API to update the company profile
 *
 * @param {Object} profile The updated company profile data
 * @returns {Promise<Object>} A Promise that resolves with the updated company profile
 * @throws {Error} If the 'id' is missing, the API request fails, or if it returns an error status
 */

export async function editCompany(profile) {
 const id = localStorage.getItem('companyId');
 console.log(profile);
 


  console.log(id);
  const profileURL = apiPath + companyUrl + `${id}`;
  console.log(profileURL);

  const accessToken = JSON.parse(getToken('token'));
  if (profile.phone) {
    profile.phone = Number(profile.phone);
  }
  const body = JSON.stringify(profile);
  console.log(body);

  const options = {
    method: 'PUT',
    body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(profileURL, options);
    console.log(response);

    const profile = await response.json();
    console.log(profile);

    switch (response.status) {
      case 200: {
        alert('Update was successful');
        return profile;
      }
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (err) {
    message(
      'danger',
      'An error occured when attempting to edit company details',
      '#editCompanyErrorContainer'
    );
    console.error(err);
  }
}
