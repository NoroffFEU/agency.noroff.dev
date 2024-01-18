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

export function handleLoginRedirect(url) {
  window.location.replace(url);
}

export function getRedirectUrl(role) {
  switch (role) {
    case 'Applicant':
      return '/';
    case 'Admin':
      return '/';
    case 'Client':
      return '/';
    default:
      return '/';
  }
}
