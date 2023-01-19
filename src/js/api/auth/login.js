import { Store } from '../../storage/storage.js';
import { apiPath } from '../constants.js';

// Temporary
const action = 'users/login';
const method = 'POST';

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
        // Temporary error handling
        alert('Wrong username/passowrd');
        break;
      default:
        // Temporary error handling
        throw new Error();
    }
  } catch {
    // Temporary error handling
    console.log(error);
  }
}
