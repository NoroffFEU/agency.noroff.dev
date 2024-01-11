/**
 *
 * This function is creating the content inside the header tag on each page
 *
 * @returns base header element
 *
 *
 */
export const header = () => {
  const headerElement = document.querySelector('header');
  headerElement.classList.add('bg-theme-dark', 'sticky-top');

  return (headerElement.innerHTML = `<div id="nav-container" class="container-fluid px-md-5">
  <nav class="navbar navbar-expand-lg mx-0 mx-md-5 px-0 px-md-5 py-2">
      <div id="nav-elements" class="mx-0 mx-md-5 px-0 px-md-3 container-fluid">
        <a class="navbar-brand ms-5 me-0 p-0" href="/">
        <div class="d-flex gap-2">
          <img src="../../../public/assets/icons/noroff-logo.svg" class="logo-noroff my-auto" />
          <div class="d-flex flex-column">
            <span class="company_name fs-4 fw-semibold text-white" style="height: 28px">Noroff</span>
            <span class="company_branch fs-6 text-white">Job Agency</span>
          </div>

        </div>
      </a>
      <button class="navbar-toggler shadow-none navbar-dark border-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="hamburger hamburger-top"></span>
        <span class="hamburger hamburger-mid"></span>
        <span class="hamburger hamburger-bottom"></span>

      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      </div>
    </div>
  </nav>
</div>`);
};

let pageTitle = document.querySelector('title');
pageTitle.innerText = 'Standard';

/**
 *
 * This function is adding the navigation to the header element based on the state of thus user.
 * If the user is Admin, user og not logged in, it will display different navigation options.
 *
 * If the user is logged in the navigation will change to have a sign out button
 *
 * @returns navigation option based on the user's status.
 *
 */
function navTemplate(status) {
  const navBarNav = document.getElementById('navbarNav');
  const unOrderedListNav = document.createElement('ul');
  unOrderedListNav.className = 'navbar-nav gap-2';
  unOrderedListNav.id = 'navItems';
  const navLists1 = document.createElement('li');
  navLists1.classList.add('nav-item');
  const navLink1 = document.createElement('a');
  navLink1.className = 'nav-link text-white fw-semibold';
  navLink1.ariaCurrent = 'page';
  navLink1.href = '/index.html';
  navLink1.id = 'navItems';
  navLink1.innerText = 'Home';
  navLists1.append(navLink1);
  const navLists2 = document.createElement('li');
  navLists2.classList.add('nav-item');
  const navLink2 = document.createElement('a');
  navLink2.className = 'nav-link text-white fw-semibold';
  navLink2.ariaCurrent = 'page';
  navLink2.href = '/pages/user/index.html';
  navLink2.id = 'navItems';
  navLink2.innerText = 'Profile';
  navLists2.append(navLink2);
  const navLists3 = document.createElement('li');
  navLists3.classList.add('nav-item');
  const navLink3 = document.createElement('a');
  navLink3.className = 'nav-link text-white fw-semibold';
  navLink3.ariaCurrent = 'page';
  navLink3.href = '/pages/listings/index.html';
  navLink3.id = 'navItems';
  navLink3.innerText = 'Listings';
  navLists3.append(navLink3);
  const navLists4 = document.createElement('li');
  navLists3.classList.add('nav-item');
  const navLink4 = document.createElement('a');
  navLink4.className = 'nav-link text-white fw-semibold';
  navLink4.ariaCurrent = 'page';
  navLink4.href = '#';
  navLink4.id = 'navItems';
  navLink4.innerText = status;
  navLists4.append(navLink4);
  unOrderedListNav.append(navLists1, navLists2, navLists3, navLists4);
  navBarNav.append(unOrderedListNav);
}

export const checkState = () => {
  const role = JSON.parse(localStorage.getItem('role'));

  if (role == 'Applicant') {
    const status = 'Log out';
    return navTemplate(status);
  }

  // The profile button on here is for development reasons
  if (!role || role === 'null') {
    const status = 'Log in';
    return navTemplate(status);
  }
};
