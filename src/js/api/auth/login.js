import { Store } from '../../storage/storage.js';
import { apiPath } from '../constants.js';

// Temporary
const action = 'users/login';
const method = 'POST';
const errorContainer = document.querySelector('#errorContainer');

/**
 * Function for logging in an existing user in database by storing the returned token in localstorage
 * @param {object} profile Takes in input values from loginForm
 */
export async function login(profile) {
  /* 
  Responses Parameters
    Code: 200
    Content type: application/json
  */

  // Temporary
  const loginURL = apiPath + action;
  const body = JSON.stringify(profile);
  const options = {
    method,
    body,
    headers: {
      'Content-Type': 'application/json;',
    },
  };

  try {
    /* data: {
    userId: String,
    firstName: String,
    lastName: String,
    email: email,
    token: string,
    } */

    const response = await fetch(loginURL, options);
    const { token, ...profile } = await response.json();
    const { email, ...filteredProfile } = profile;

    switch (response.status) {
      // Let me know if there are any particular server responses I should add and check for.

      case 200: // Successful request
        new Store('token', token);
        new Store('profile', filteredProfile);
        if (profile.admin) {
          window.location.replace('#');
        } else {
          window.location.replace('./../../user/index.html');
        }
        break;
      case 401:
        errorContainer.innerHTML = 'Incorrect username/password';
        break;
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch {
    errorContainer.innerHTML = 'Unknown error occured. Please try again later, if the problem persist contact customer support.';
    console.log(error);
  }
}
