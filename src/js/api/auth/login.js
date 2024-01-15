import { Store } from '../../storage/storage.js';
import { callLoginApi } from './callLoginApi.js';
import { message } from '../../utilities/message/message.js';
import {
  clearProfileData,
  getRedirectUrl,
  handleLoginRedirect,
  storeProfileData,
} from './utils.js';

/**
 * Function for logging in an existing user in database and storing the returned token in session or localstorage
 * @param {object} profile Values from loginForm
 * @param {string} profile.email Email of the user
 * @param {string} profile.password Plain text password
 * @param {string} [profile.remember] If the user checkbox is checked it will equal to the string 'on'
 * @returns {Promise<void>}
 */
export async function login(profile) {
  const { remember, email, password } = profile;

  const rememberLogin = remember === 'on';

  try {
    const { userData, error } = await callLoginApi(email, password);

    switch (response.status) {
      case 200:
        new Store('token', token, Boolean(remember !== 'on'));
        new Store('profile', filteredProfile, Boolean(remember !== 'on'));
        new Store('role', role, Boolean(remember !== 'on'));
        new Store('email', email, true);
        new Store('id', id, Boolean(remember !== 'on'));
        // add  chck for id :
        if (id === id) { // spiderman.gif
          window.location.replace('/pages/user/index.html');
        } else if (profile.admin) {
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

    const { role } = userData;

    clearProfileData(Store); // Clear any previous data
    storeProfileData(userData, rememberLogin, Store);

    const redirectUrl = getRedirectUrl(role);
    handleLoginRedirect(redirectUrl);
  } catch (error) {
    message('danger', 'An unknown error occurred. Please try again later', '#errorContainer');
    console.error(error);
  }
}
