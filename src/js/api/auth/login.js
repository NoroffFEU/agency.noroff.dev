import { Store } from '../../storage/storage.js';
import { callLoginApi } from './handleAuthServices.js';


/**
 * Function for logging in an existing user in database and storing the returned token in session or localstorage
 * @param {object} profile Values from loginForm
 * @param {string} profile.email Email of the user
 * @param {string} profile.password Plain text password
 * @param {string} [profile.remember] If the user checkbox is checked it will equal to the string 'on'
 * @returns {void}
 */
export async function login(profile) {
  const { remember, email, password } = profile;

  const rememberLogin = remember === 'on';

  const errorContainer = document.querySelector('#errorContainer');

  try {
    const { userData, error } = await callLoginApi(email, password);

    if (error) {
      return (errorContainer.innerHTML = error?.message);
    }

    const { role } = userData;

    clearProfileData(Store); // Clear any previous data
    storeProfileData(userData, rememberLogin, Store);

    const redirectUrl = getRedirectUrl(role);
    handleLoginRedirect(redirectUrl);
  } catch (error) {
    errorContainer.innerHTML =
      'Unknown error occurred. Please try again later, if the problem persist contact customer support.';
    console.error(error);
  }
}

/**
 * @param {UserData} userData - The user data to store.
 * @param {boolean} rememberLogin - Whether or not to remember the login
 * @param {Store} Store - The store class.
 */
function storeProfileData(userData, rememberLogin, Store) {
  const { token, role, id, email } = userData;

  new Store('token', token, rememberLogin);
  new Store('role', role, rememberLogin);
  new Store('email', email, rememberLogin);
  new Store('id', id, rememberLogin);
}

/**
 * @param {Store} Store - The store class.
 */
function clearProfileData(Store) {
  new Store('token').clear();
  new Store('role').clear();
  new Store('email').clear();
  new Store('id').clear();
}

function handleLoginRedirect(url) {
  window.location.replace(url);
}

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
