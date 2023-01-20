import { Store } from '../../storage/storage.js';
import { apiPath } from '../constants.js';


// Author: Truls Haakenstad @Menubrea
// Dev-Team: Frontend - User

const action = 'users/login';
const method = 'POST';
const errorContainer = document.querySelector('#errorContainer');


/**
 * Function for logging in an existing user in database by storing the returned token in localstorage
 * @param {object} profile Takes in input values from loginForm
 */
export async function login(profile) {

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

    const response = await fetch(loginURL, options);
    const { token, ...profile } = await response.json();

    switch (response.status) {
      // Let me know if there are any particular server responses I should add and check for.

      case 200: // Successful request
        Store('Token', token);
        Store('Profile', profile);
        if (profile.admin) {
          location.replace('#');
        } else if (profile.company) {
          location.replace('#');
        } else {
          location.replace('#');
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
    const response = await fetch(loginURL, options);
    const { token, ...profile } = await response.json();
    const { email, ...filteredProfile } = profile;

    switch (response.status) {
      case 200:
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
