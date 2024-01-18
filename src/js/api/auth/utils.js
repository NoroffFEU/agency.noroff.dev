/**
 * @param {UserData} userData - The user data to store.
 * @param {boolean} rememberLogin - Whether or not to remember the login
 * @param {Store} Store - The store class.
 */
export function storeProfileData(userData, rememberLogin, Store) {
  const { token, role, id, email } = userData;

  new Store('token', token, rememberLogin);
  new Store('role', role, rememberLogin);
  new Store('email', email, rememberLogin);
  new Store('id', id, rememberLogin);
}

/**
 * @param {Store} Store - The store class.
 */
export function clearProfileData(Store) {
  new Store('token').clear();
  new Store('role').clear();
  new Store('email').clear();
  new Store('id').clear();
}
/**
 * function that uses a URL parameter, when the function is called the user is redirected to the URL used
 * @param {string} url 
 */
export function handleLoginRedirect(url) {
  window.location.replace(url);
}
/**
 * function that returns a URL based on which role a user have
 * @param {string} role 
 * @returns {string} URL
 */
export function getRedirectUrl(role) {
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
