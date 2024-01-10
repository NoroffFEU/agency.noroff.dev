/**
 * @description Creates content inside header
 * @returns Dynamic header content based on user status
 */
export const header = () => {
  const header = document.querySelector('header');
  header.classList.add('bg-theme-dark', 'sticky-top', 'd-flex', 'align-items-center');

  const logoContainer = document.createElement('a');
  logoContainer.classList.add('d-flex', 'navbarBrand', 'ms-5', 'me-0', 'p-0', 'gap-2');
  logoContainer.href = '/';

  const img = document.createElement('img');
  img.classList.add('Logo-noroff', 'my-auto');
  img.src = '/assets/icons/noroff-logo.svg';
  img.setAttribute('width', '40');
  img.setAttribute('height', '56');

  const logoText = document.createElement('div');
  logoText.classList.add('d-flex', 'flex-column');

  const logoTextTop = document.createElement('span');
  logoTextTop.classList.add('company_name', 'fs-4', 'fw-semibold', 'text-white');
  logoTextTop.style.height = '28px';
  logoTextTop.textContent = 'Noroff';

  const logoTextBottom = document.createElement('span');
  logoTextBottom.classList.add('company_branch', 'fs-6', 'text-white');
  logoTextBottom.textContent = 'Job Agency';

  logoText.append(logoTextTop, logoTextBottom);
  logoContainer.append(img, logoText);

  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-expand-lg', 'mx-0', 'mx-md-5', 'px-0', 'px-md-5', 'py-2');

  const navbarCollapse = document.createElement('div');
  navbarCollapse.classList.add('collapse', 'navbar-collapse', 'justify-content-end');
  navbarCollapse.id = 'navbarNav';

  const button = document.createElement('button');
  button.classList.add('navbar-toggler', 'shadow-none', 'navbar-dark', 'border-0', 'd-lg-none');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#navbarNav');
  button.setAttribute('aria-controls', 'navbarNav');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');

  const span = document.createElement('span');
  span.classList.add('navbar-toggler-icon', 'navbar-dark');
  button.append(span);

  nav.append(navbarCollapse);

  header.append(logoContainer, nav, button);

  return header;
};

// For testing states
const stateValue = 'null';
localStorage.setItem('role', stateValue);
let pageTitle = document.querySelector('title');
pageTitle.innerText = 'Standard';

/**
 * @description Dynamicly change to content based on user state (logged in/out, admin, user )
 * @returns Navigation based on user state
 */
export const checkState = () => {
  const role = localStorage.getItem('role');
  const navBarNav = document.querySelector('#navbarNav');

  if (role === 'user') {
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'gap-2');
    ul.id = 'navUl';

    const links = [
      { href: '/index.html', text: 'Home' },
      { href: '/pages/user/index.html', text: 'Profile' },
      { href: '/pages/listings/index.html', text: 'Listings' },
    ];

    links.forEach((link) => {
      const li = document.createElement('li');
      li.classList.add('nav-item');

      const a = document.createElement('a');
      a.classList.add('nav-link', 'text-white', 'fw-semibold');
      a.href = link.href;
      a.textContent = link.text;
      a.setAttribute('aria-current', 'page');

      li.append(a);
      ul.append(li);
    });

    const logoutLi = document.createElement('li');
    logoutLi.classList.add('nav-item');

    const logoutBtn = document.createElement('a');
    logoutBtn.classList.add('btn', 'btn-outline-light', 'text-white', 'fw-semibold');
    logoutBtn.href = '#';
    logoutBtn.id = 'signOut';
    logoutBtn.textContent = 'Log out';

    logoutLi.append(logoutBtn);
    ul.append(logoutLi);

    navBarNav.append(ul);
  } else if (role === 'admin') {
    const navBarNav = document.querySelector('#navbarNav');

    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'gap-2');
    ul.id = 'navUl';

    const links = [
      { href: '/index.html', text: 'Home', extraClass: 'fw-semibold' },
      { href: '#', text: 'Profile' },
      { href: '/pages/listings/index.html', text: 'Listings' },
    ];

    links.forEach((link) => {
      const li = document.createElement('li');
      li.classList.add('nav-item');

      const a = document.createElement('a');
      a.classList.add('nav-link', 'text-white');
      if (link.extraClass) a.classList.add(link.extraClass);
      a.href = link.href;
      a.textContent = link.text;
      a.setAttribute('aria-current', 'page');
      a.id = 'navItems'; // Note: Reusing the same ID on multiple elements is invalid HTML

      li.append(a);
      ul.append(li);
    });

    const logoutLi = document.createElement('li');
    logoutLi.classList.add('nav-item');

    const logoutBtn = document.createElement('a');
    logoutBtn.classList.add('btn', 'btn-outline-light', 'text-white');
    logoutBtn.href = '#';
    logoutBtn.id = 'logOutUser';
    logoutBtn.textContent = 'Log out';

    logoutLi.append(logoutBtn);
    ul.append(logoutLi);

    navBarNav.append(ul);
  } else if (role === 'null') {
    const navBarNav = document.querySelector('#navbarNav');

    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'gap-5', 'me-0', 'me-xl-5');
    ul.id = 'navUl';

    const links = [
      { href: '/index.html', text: 'Home', extraClass: 'fw-semibold' },
      { href: '/pages/user/index.html', text: 'Profile', extraClass: 'fw-semibold' },
      { href: '/pages/listings/index.html', text: 'Listings', extraClass: 'fw-semibold' },
    ];

    links.forEach((link) => {
      const li = document.createElement('li');
      li.classList.add('nav-item');

      const a = document.createElement('a');
      a.classList.add('nav-link', 'text-white');
      if (link.extraClass) a.classList.add(link.extraClass);
      a.href = link.href;
      a.textContent = link.text;
      a.setAttribute('aria-current', 'page');
      a.id = 'navItems'; // Note: Reusing the same ID on multiple elements is invalid HTML

      li.append(a);
      ul.append(li);
    });

    const loginLi = document.createElement('li');
    loginLi.classList.add('nav-item', 'my-auto');

    const loginBtn = document.createElement('a');
    loginBtn.classList.add(
      'btn',
      'btn-outline-light',
      'text-white',
      'rounded-0',
      'py-1',
      'px-4',
      'fw-semibold'
    );
    loginBtn.href = '/pages/auth/login/index.html';
    loginBtn.textContent = 'Log in';
    loginBtn.id = 'navItems'; // Note about ID uniqueness

    loginLi.append(loginBtn);
    ul.append(loginLi);

    const registerLi = document.createElement('li');
    registerLi.classList.add('nav-item', 'my-auto');

    const registerBtn = document.createElement('a');
    registerBtn.classList.add(
      'btn',
      'btn-theme-secondary',
      'text-black',
      'rounded-0',
      'py-1',
      'px-4',
      'fw-semibold'
    );
    registerBtn.href = '/pages/auth/register/applicant/index.html';
    registerBtn.textContent = 'Register';
    registerBtn.id = 'registerUser';

    registerLi.append(registerBtn);
    ul.append(registerLi);

    navBarNav.append(ul);
  }
};
