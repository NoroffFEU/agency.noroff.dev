import { Store } from '../../storage/storage.js';
import { apiPath } from '../constants.js';
import { dummyApiUrl } from '../constants.js';

// Author: Truls Haakenstad @Menubrea
// Dev-Team: Frontend - User

/* To future Developer
  At the point of writing this, none of this code has been run on client to the API as its not up and running. The login response is still a bit up in the air, so its possible you will have to change some of the variables created from the response, as well as updating logic. What should and shouldn't be added to local storage is also up for contention, our frontend team discussed other options than local storage for security sensitive data, but priority has been more geared towards creating a structure more so than a final product.

  What server responses to target is also something that could be discussed. At the moment it only checks for 200 and 401 and throws an error if neither. 
  
  Any questions can be forwarded to Truls H. Haugen on Discord or @Menubrea on github.
 */

const action = 'users/login';
const method = 'POST';
const errorContainer = document.querySelector('#errorContainer');

/**
 * Function for logging in an existing user in database by storing the returned token in localstorage
 * @param {object} profile Takes in input values from loginForm
 */
export async function login(profile) {
  const loginURL = dummyApiUrl + 'auth/login';
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
    const { token, role, ...profile } = await response.json();
    const { email, ...filteredProfile } = profile;

    switch (response.status) {
      case 200:
        new Store('token', token);
        new Store('profile', filteredProfile);
        new Store('role', role);
        new Store('email', email);

        if (profile.admin) {
          window.location.replace('#');
        } else {
          window.location.replace('/pages/user/index.html');
        }
        break;
      case 403:
        errorContainer.innerHTML = 'Incorrect username/password';
        break;
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    errorContainer.innerHTML = 'Unknown error occured. Please try again later, if the problem persist contact customer support.';
    console.log(error);
  }
}
