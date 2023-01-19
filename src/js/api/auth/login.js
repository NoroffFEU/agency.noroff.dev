import { Store } from '../../storage/storage.js';
import { apiPath } from '../constants.js';

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
