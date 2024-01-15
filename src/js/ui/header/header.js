/**
 * @description Creates content inside header
 * @returns Dynamic header content based on user status
 */
export const header = () => {
  const header = document.querySelector('header');
  header.classList.add('bg-theme-dark', 'fixed-top', 'align-items-center', 'shadow-lg', 'p-2');

  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-expand-md', 'me-lg-3', 'p-0', 'bg-theme-dark');

  const container = document.createElement('div');
  container.classList.add('container-fluid');

  const logoContainer = document.createElement('a');
  logoContainer.classList.add('navbar-brand', 'd-flex', 'ms-3', 'gap-2');
  logoContainer.href = '/';

  const img = document.createElement('img');
  img.classList.add('Logo-noroff', 'my-auto');
  img.src = '/assets/icons/noroff-logo.svg';
  img.setAttribute('width', '33');
  img.setAttribute('height', '50');

  const logoText = document.createElement('div');
  logoText.classList.add('d-flex', 'flex-column', 'text-white');

  const logoTextTop = document.createElement('span');
  logoTextTop.classList.add('fs-4', 'fw-semibold');
  logoTextTop.textContent = 'Noroff';

  const logoTextBottom = document.createElement('span');
  logoTextBottom.classList.add('fs-6');
  logoTextBottom.textContent = 'Job Agency';

  logoText.append(logoTextTop, logoTextBottom);
  logoContainer.append(img, logoText);

  const button = document.createElement('button');
  button.classList.add('navbar-toggler', 'navbar-dark', 'border-0', 'ms-auto');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#navbarNavDropdown');
  button.setAttribute('aria-controls', '#navbarNavDropdown');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');

  const span = document.createElement('span');
  span.classList.add('navbar-toggler-icon', 'navbar-dark');
  button.append(span);

  const navbarCollapse = document.createElement('div');
  navbarCollapse.classList.add('collapse', 'navbar-collapse');
  navbarCollapse.id = 'navbarNavDropdown';

  const ul = document.createElement('ul');
  ul.classList.add(
    'navbar-nav',
    'ms-auto',
    'align-items-center',
    'text-center',
    'gap-4',
  );
  ul.id = 'navUl';

  navbarCollapse.append(ul);

  container.append(logoContainer, button, navbarCollapse);
  nav.append(container);
  header.append(nav);

  return header;
};
