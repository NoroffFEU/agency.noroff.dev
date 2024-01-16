import { indexKeyNavigation } from './indexKeyNavigation';

/**
 * @description Creates content inside header
 * @returns logo and navigation
 */
export const header = () => {
  const header = document.querySelector('header');
  header.classList.add('bg-theme-dark', 'fixed-top', 'align-items-center', 'shadow-lg', 'p-2');

  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-dark', 'navbar-expand-md', 'me-lg-3', 'p-0');
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  const container = document.createElement('div');
  container.classList.add('container-fluid');

  const logoContainer = document.createElement('a');
  logoContainer.classList.add('navbar-brand', 'd-flex', 'gap-2');
  logoContainer.href = '/';
  logoContainer.setAttribute('aria-label', 'Noroff Job Agency home page');

  const img = document.createElement('img');
  img.classList.add('my-auto');
  img.src = '/assets/icons/noroff-logo.svg';
  img.setAttribute('width', '200');
  img.setAttribute('height', '70');
  img.alt = 'Noroff Job Agency Logo';

  logoContainer.append(img);

  const button = document.createElement('button');
  button.classList.add('navbar-toggler', 'border-0', 'ms-auto', 'p-0');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#navbarNavDropdown');
  button.setAttribute('aria-controls', 'navbarNavDropdown');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');

  const span = document.createElement('span');
  span.classList.add('navbar-toggler-icon');
  button.append(span);

  const navbarCollapse = document.createElement('div');
  navbarCollapse.classList.add('collapse', 'navbar-collapse');
  navbarCollapse.id = 'navbarNavDropdown';

  const ul = document.createElement('ul');
  ul.classList.add('navbar-nav', 'ms-auto', 'align-items-center', 'text-center', 'gap-4');
  ul.id = 'navUl';
  ul.setAttribute('role', 'menubar');
  ul.setAttribute('aria-labelledby', 'navUl');

  navbarCollapse.append(ul);

  container.append(logoContainer, button, navbarCollapse);
  nav.append(container);
  header.append(nav);

  return header;
};
