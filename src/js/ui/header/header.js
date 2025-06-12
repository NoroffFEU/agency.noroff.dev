/**
 * @description Creates content inside header
 * @returns logo and navigation
 */
export const header = () => {
  const header = document.querySelector('header');
  header.setAttribute('data-testid', 'header');

  header.classList.add('bg-theme-dark', 'fixed-top', 'align-items-center', 'shadow-lg', 'p-2');

  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-dark', 'navbar-expand-md', 'p-0');
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  const container = document.createElement('div');
  container.classList.add('container-fluid');

  const logoContainer = document.createElement('a');
  logoContainer.classList.add('navbar-brand', 'm-0', 'p-0');
  logoContainer.href = '/';
  logoContainer.setAttribute('aria-label', 'Noroff Job Agency home page');

  const img = document.createElement('img');
  img.src = '/assets/logo/noroff-logo.png';
  img.setAttribute('width', '150');
  img.alt = 'Noroff Job Agency Logo';

  logoContainer.append(img);

  const button = document.createElement('button');
  button.classList.add('navbar-toggler', 'collapsed', 'border-0', 'ms-auto', 'p-0');
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
  navbarCollapse.classList.add('collapse', 'navbar-collapse', 'w-100');
  navbarCollapse.id = 'navbarNavDropdown';

  const ul = document.createElement('ul');
  ul.classList.add(
    'navbar-nav',
    'ms-auto',
    'align-items-center',
    'text-center',
    'gap-4',
    'p-3',
    'p-md-0',
    'w-100',
    'd-flex',
    'justify-content-around'
  );
  ul.id = 'navUl';
  ul.setAttribute('role', 'button');
  ul.setAttribute('aria-labelledby', 'navUl');

  navbarCollapse.append(ul);

  container.append(logoContainer, button, navbarCollapse);
  nav.append(container);
  header.append(nav);

  return header;
};
