import { displayLoginLogoutButton } from './displayLoginLogoutButton.js';
import { indexKeyNavigation } from './indexKeyNavigation.js';

let pageTitle = document.querySelector('title');
pageTitle.innerText = 'Standard';

/**
 * @description Dynamicly change to content based on user state (logged in/out, admin, user )
 * @returns Navigation based on user state
 */
export const checkState = () => {
  const roleRaw = localStorage.getItem('role');
  let role = JSON.parse(roleRaw);
  const ul = document.querySelector('#navUl');

  if (role === 'Applicant') {
    const links = [
      { href: '/', text: 'Home' },
      { href: '/pages/user/', text: 'Profile' },
      { href: '/pages/listings/', text: 'Listings' },
    ];
    const lis = iterateLinks(links);
    lis.forEach((li) => ul.append(li));
    ul.append(displayLoginLogoutButton(role));
  } else if (role === 'Admin') {
    const links = [
      { href: '/', text: 'Home' },
      { href: '/pages/admin/', text: 'Profile' },
      { href: '/pages/listings/', text: 'Listings' },
    ];
    const lis = iterateLinks(links);
    lis.forEach((li) => ul.append(li));
    ul.append(displayLoginLogoutButton(role));
  } else if (role === 'Client') {
    const links = [
      { href: '/', text: 'Home' },
      { href: '/pages/user/', text: 'Profile' },
      { href: '/pages/listings/', text: 'Listings' },
    ];
    const lis = iterateLinks(links);
    lis.forEach((li) => ul.append(li));
    ul.append(displayLoginLogoutButton(role));
  } else if (role === null) {
    const links = [
      { href: '/', text: 'Home' },
      { href: '/pages/listings/', text: 'Listings' },
    ];
    const lis = iterateLinks(links);
    lis.forEach((li) => ul.append(li));
    ul.append(displayLoginLogoutButton(role));

    const registerLi = document.createElement('li');
    registerLi.classList.add('nav-item');
    const registerBtn = document.createElement('a');
    registerBtn.classList.add('btn', 'btn-theme-secondary', 'text-black', 'fw-semibold','navBtnCustomWidth');
    registerBtn.href = '/pages/auth/register/applicant/';
    registerBtn.textContent = 'Register';
    registerBtn.id = 'registerUser';
    indexKeyNavigation(registerLi, registerBtn);
    registerLi.append(registerBtn);
    ul.append(registerLi);
  }
};

/**
 * @description Checks user role/state, and creates a dynamic ul based on that role
 * @param {Array} links
 * @returns list elements
 */
function iterateLinks(links) {
  const currentPage = window.location.pathname;

  return links.map((link) => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    const a = document.createElement('a');
    a.classList.add('nav-link', 'text-white');
    a.href = link.href;
    a.textContent = link.text;

    indexKeyNavigation(li, a);

    if (currentPage === link.href) {
      a.setAttribute('aria-current', 'page');
    } else {a.setAttribute('aria-label', `${link.text} page`);
    }

    li.append(a);
    return li;
  });
}
