/**
 * @description Creates content inside header
 * @returns Dynamic header content based on user status
 */
export const header = () => {
  const header = document.querySelector('header');
  header.classList.add('bg-theme-dark', 'shadow-lg', 'fixed-top', 'd-flex', 'align-items-center');

  const logoContainer = document.createElement('a');
  logoContainer.classList.add('d-flex', 'navbar-brand', 'ms-3', 'p-2', 'gap-2');
  logoContainer.href = '/';

  const img = document.createElement('img');
  img.classList.add('Logo-noroff', 'my-auto');
  img.src = '/assets/icons/noroff-logo.svg';
  img.setAttribute('width', '33');
  img.setAttribute('height', '50');

  const logoText = document.createElement('div');
  logoText.classList.add('d-flex', 'flex-column', 'text-white');

  const logoTextTop = document.createElement('span');
  logoTextTop.classList.add('company_name', 'fs-4', 'fw-semibold', 'bg-secondary');
  logoTextTop.textContent = 'Noroff';

  const logoTextBottom = document.createElement('span');
  logoTextBottom.classList.add('company_branch', 'fs-6', 'bg-warning');
  logoTextBottom.textContent = 'Job Agency';

  logoText.append(logoTextTop, logoTextBottom);
  logoContainer.append(img, logoText);

  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-expand-lg', 'mx-0', 'mx-md-5', 'px-0', 'px-md-5', 'py-2');

  const navbarCollapse = document.createElement('div');
  navbarCollapse.classList.add('collapse', 'navbar-collapse', 'justify-content-end');
  navbarCollapse.id = 'navbarNav';

  const button = document.createElement('button');
  button.classList.add('navbar-toggler', 'navbar-dark', 'border-0', 'd-lg-none', 'ms-auto');
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
