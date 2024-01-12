import { Store } from '../../storage/storage.js';
import { message } from '../../utilities/message/message.js';
import { callLoginApi } from './callLoginApi.js';

/**
 * Logs in an existing user and stores the returned token.
 * @param {object} profile - User login information.
 * @param {string} profile.email - Email of the user.
 * @param {string} profile.password - Password of the user.
 * @param {string} [profile.remember] - If the user checkbox is checked, equals 'on'.
 */
export async function login(profile) {
  const { remember, email, password } = profile;
  const rememberLogin = remember === 'on';

  try {
    const response = await callLoginApi(email, password);

    if (response.error) {
      message('danger', 'Invalid login credentials. Please try again', '#errorContainer');
      return;
    }

    const { userData } = response;
    clearProfileData(); // Clear any previous data
    storeProfileData(userData, rememberLogin);

    const redirectUrl = getRedirectUrl(userData.role);
    handleLoginRedirect(redirectUrl);
  } catch (error) {
    message('danger', `An unknown error occurred, please try again later`, '#errorContainer');
    console.error(error);
  }
}

/**
 * Stores the user data in local or session storage.
 * @param {UserData} userData - The user data to store.
 * @param {boolean} rememberLogin - Whether to remember the login.
 */
function storeProfileData(userData, rememberLogin) {
  const { token, role, id, email } = userData;

  new Store('token', token, rememberLogin).save();
  new Store('role', role, rememberLogin).save();
  new Store('email', email, rememberLogin).save();
  new Store('id', id, rememberLogin).save();
}

/**
 * Clears the user data from storage.
 */
function clearProfileData() {
  new Store('token').clear();
  new Store('role').clear();
  new Store('email').clear();
  new Store('id').clear();
}

/**
 * Redirects the user to a specified URL.
 * @param {string} url - The URL to redirect to.
 */
function handleLoginRedirect(url) {
  window.location.replace(url);
}

/**
 * Determines the redirect URL based on the user role.
 * @param {string} role - The user's role.
 * @returns {string} The redirect URL.
 */
function getRedirectUrl(role) {
  switch (role) {
    case 'Applicant':
      return '/pages/user/index.html';
    case 'Admin':
      return '#'; // TODO: Add admin page url
    case 'Client':
      return '#'; // TODO: Add client page url
    default:
      return '/pages/user/index.html';
  }
}
