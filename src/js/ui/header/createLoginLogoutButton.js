/**
 * @description Recieves the auth role of the user, and returns auth buttons based on role.
 * @param {string} role
 * @returns Login / Logout button
 */
export function createLoginLogoutButton(role) {
  console.log(role);
  if (role != null) {
    const logoutLi = document.createElement('li');
    logoutLi.classList.add('nav-item');

    const logoutBtn = document.createElement('a');
    logoutBtn.classList.add('btn', 'btn-outline-light', 'text-white', 'fw-semibold');
    logoutBtn.href = '#';
    logoutBtn.id = 'signOut';
    logoutBtn.textContent = 'Log out';
    logoutLi.append(logoutBtn);

    return logoutLi;
  } else if (role === null) {
    const loginLi = document.createElement('li');
    loginLi.classList.add('nav-item');

    const loginBtn = document.createElement('a');
    loginBtn.classList.add('btn', 'btn', 'btn-outline-light', 'text-white', 'fw-semibold');
    loginBtn.href = '/pages/auth/login/index.html';
    loginBtn.textContent = 'Log in';
    loginBtn.id = 'navItems';
    loginLi.append(loginBtn);

    return loginLi;
  }
}
