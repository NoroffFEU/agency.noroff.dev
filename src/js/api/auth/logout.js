/**
 * I removed the use of the Store class from the logout function because the token can now be stored in either local storage or session storage.
 * Joakim Tveter - joakimtveter
 */

/**
 * Removes token, profile and role from local storage or session storage.
 * It levaes the email in the local storage for prefilling of the login form.
 * @return {void}
 */

export const logout = function () {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  localStorage.removeItem('profile');
  sessionStorage.removeItem('profile');
  localStorage.removeItem('role');
  sessionStorage.removeItem('role');
  localStorage.removeItem('id');
  sessionStorage.removeItem('id');
  localStorage.removeItem('email');
  sessionStorage.removeItem('email');
  localStorage.removeItem('companyId');
  window.location.replace('/');
};
