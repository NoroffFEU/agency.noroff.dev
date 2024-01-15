import { logout } from '../../api/auth';
import { indexKeyNavigation } from './indexKeyNavigation';

/**
 * @description Recieves the auth role of the user, and returns auth buttons based on role.
 * @param {string} role
 * @returns Login / Logout button
 */
export function displayLoginLogoutButton(role) {
  if (role != null) {
    const logoutLi = document.createElement('li');
    logoutLi.classList.add('nav-item');

    const logoutBtn = document.createElement('a');
    logoutBtn.classList.add('btn', 'btn-outline-light', 'text-white', 'fw-semibold');
    logoutBtn.href = '/';
    logoutBtn.id = 'signOut';
    logoutBtn.textContent = 'Log out';
    logoutBtn.setAttribute('tabindex', '1');
    logoutBtn.setAttribute('aria-label', 'log out');

    indexKeyNavigation(logoutLi);

    logoutBtn.addEventListener('click', () => {
      logout();
    });
    logoutLi.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        logout();
      }
    });

    logoutLi.append(logoutBtn);

    return logoutLi;
  } else if (role === null) {
    const loginLi = document.createElement('li');
    loginLi.classList.add('nav-item');

    const loginBtn = document.createElement('a');
    loginBtn.classList.add('btn', 'btn', 'btn-outline-light', 'text-white', 'fw-semibold');
    loginBtn.href = '/pages/auth/login/';
    loginBtn.id = 'navItems';
    loginBtn.textContent = 'Log in';
    loginBtn.setAttribute('aria-label', 'log in');

    indexKeyNavigation(loginLi, loginBtn);
    loginLi.append(loginBtn);

    return loginLi;
  }
}
