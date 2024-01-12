import { displayLoginLogoutButton } from './displayLoginLogoutButton.js';

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
      { href: '/index.html', text: 'Home' },
      { href: '/pages/user/index.html', text: 'Profile' },
      { href: '/pages/listings/index.html', text: 'Listings' },
    ];
    const lis = iterateLinks(links);
    lis.forEach((li) => ul.append(li));
    ul.append(displayLoginLogoutButton(role));
  } else if (role === 'Admin') {
    const links = [
      { href: '/index.html', text: 'Home' },
      { href: '#', text: 'Profile' },
      { href: '/pages/listings/index.html', text: 'Listings' },
    ];
    const lis = iterateLinks(links);
    lis.forEach((li) => ul.append(li));
    ul.append(displayLoginLogoutButton(role));
  } else if (role === 'Client') {
    const links = [
      { href: '/index.html', text: 'Home' },
      { href: '#', text: 'Profile' },
      { href: '/pages/listings/index.html', text: 'Listings' },
    ];
    const lis = iterateLinks(links);
    lis.forEach((li) => ul.append(li));
    ul.append(displayLoginLogoutButton(role));
  } else if (role === null) {
    const links = [
      { href: '/index.html', text: 'Home' },
      { href: '/pages/user/index.html', text: 'Profile' },
      { href: '/pages/listings/index.html', text: 'Listings' },
    ];
    const lis = iterateLinks(links);
    lis.forEach((li) => ul.append(li));
    ul.append(displayLoginLogoutButton(role));

    const registerLi = document.createElement('li');
    registerLi.classList.add('nav-item');
    const registerBtn = document.createElement('a');
    registerBtn.classList.add('btn', 'btn-theme-secondary', 'text-black', 'fw-semibold');
    registerBtn.href = '/pages/auth/register/applicant/index.html';
    registerBtn.textContent = 'Register';
    registerBtn.id = 'registerUser';
    registerLi.append(registerBtn);
    ul.append(registerLi);
  }
};

function iterateLinks(links) {
  return links.map((link) => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    const a = document.createElement('a');
    a.classList.add('nav-link', 'text-white');
    a.href = link.href;
    a.textContent = link.text;
    a.setAttribute('aria-current', 'page');
    li.append(a);
    return li;
  });
}
