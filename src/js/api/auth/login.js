import { Store } from '../../storage/storage.js';
import { apiPath } from '../constants.js';

// Author: Truls Haakenstad @Menubrea
// Dev-Team: Frontend - User

// Author: Joakim Tveter
// Dev-Team: origin-bliss

/* To future Developer
  At the point of writing this, none of this code has been run on client to the API as its not up and running. The login response is still a bit up in the air, so its possible you will have to change some of the variables created from the response, as well as updating logic. What should and shouldn't be added to local storage is also up for contention, our frontend team discussed other options than local storage for security sensitive data, but priority has been more geared towards creating a structure more so than a final product.

  What server responses to target is also something that could be discussed. At the moment it only checks for 200 and 401 and throws an error if neither. 
  
  Any questions can be forwarded to Truls H. Haugen on Discord or @Menubrea on github.
 */

/* To future Developer part 2
   The response from the server should be this at the moment of writing:
   {
      id: Unknown, // TODO: Check type of value
      firstName: String,
      lastName: String,
      email: String,
      avatar: String,
      token: String,
      role: Unknown, // TODO: Check type of value
   }
 */
const action = 'users/login';
const method = 'POST';
const errorContainer = document.querySelector('#errorContainer');

/**
 * Function for logging in an existing user in database by storing the returned token in session or localstorage
 * @param {object} profile Values from loginForm
 * @param {string} profile.email Email of the user
 * @param {string} profile.password Plain text password
 * @param {string} [profile.remember] If the user checkbox is checked it will equal to the string 'on'
 * @returns {void}
 */
export async function login(profile) {
  const { remember, ...credentials } = profile;
  const loginURL = apiPath + action;
  const body = JSON.stringify(credentials);

  const options = {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  console.log('access:', options);

  try {
    const response = await fetch(loginURL, options);
    const { token, role, email, id, ...filteredProfile } = await response.json();

    // The following code handles the log in response. part of this handling is to set the Role entry in our storage solution.
    // before starting the handling we therefore clear the existing value for the Role entry. It will be set to the correct values depending on the current log in response.
    new Store('Role', 'null', Boolean(remember !== 'on')).clear();

    switch (response.status) {
      case 200:
        new Store('token', token, Boolean(remember !== 'on'));
        new Store('profile', filteredProfile, Boolean(remember !== 'on'));
        new Store('role', role, Boolean(remember !== 'on'));
        new Store('email', email, false);
        new Store('id', id, Boolean(remember !== 'on'));
        // add  chck for id :

        if (id === id) {
            // spiderman.gif
          new Store('Role', 'user', Boolean(remember !== 'on'));
          window.location.replace('/pages/user/index');
        } else if (profile.admin) {
          new Store('Role', 'admin', Boolean(remember !== 'on'));
          window.location.replace('#'); // TODO: Add admin page url
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
    errorContainer.innerHTML =
      'Unknown error occurred. Please try again later, if the problem persist contact customer support.';
    console.error(error);
  }
}
