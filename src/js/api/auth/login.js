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

    if (error) {
      message('danger', 'Invalid login credentials. Please try again', '#errorContainer');
      return;
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
