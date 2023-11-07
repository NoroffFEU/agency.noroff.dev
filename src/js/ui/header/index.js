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

  return (headerElement.innerHTML = `<div class="container-fluid px-md-5">
  <nav class="navbar navbar-expand-lg mx-0 mx-md-5 px-0 px-md-5 py-2">
      <div class="mx-0 mx-md-5 px-0 px-md-3 container-fluid">
        <a class="navbar-brand ms-5 me-0 p-0" href="/">
        <div class="d-flex gap-2">
          <img src="/public/assets/icons/noroff-logo.svg" class="Logo-noroff my-auto" style="width: 40px;height: 56px" />
          <div class="d-flex flex-column">
            <span class="company_name fs-4 fw-semibold text-white" style="height: 28px">Noroff</span>
            <span class="company_branch fs-6 text-white">Job Agency</span>
          </div>

        </div>
      </a>
      <button class="navbar-toggler shadow-none navbar-dark border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navbar-dark"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      </div>
    </div>
  </nav>
</div>`);
};

// For testing states
const stateValue = 'null';
localStorage.setItem('Role', stateValue);
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
export const checkState = () => {
  const role = localStorage.getItem('Role');
  const navBarNav = document.getElementById('navbarNav');
  if (role == 'user') {
    return (navBarNav.innerHTML = `<ul class="navbar-nav gap-2" id="navUl">
    <li class="nav-item">

      <a class="nav-link text-white" aria-current="page" href="/index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" href="/pages/user/index.html">Profile</a>

    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="/pages/listings/index.html" id="navItems">Listings</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-outline-light text-white" href="#" id="signOut">Log out</a>
    </li>
  </ul>`);
  }

  if (role == 'admin') {
    return (navBarNav.innerHTML = `<ul class="navbar-nav gap-2" id="navUl">

    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" href="/index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" href="#">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="/pages/listings/index.html" id="navItems">Listings</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-outline-light text-white" href="#" id="logOutUser">Log out</a>
    </li>
  </ul>`);
  }

  // The profile button on here is for development reasons
  if (role == 'null') {
    return (navBarNav.innerHTML = `<ul class="navbar-nav gap-5 me-0 me-xl-5" id="navUl">
  

    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" href="/index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white fw-semibold" href="/pages/user/index.html">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white fw-semibold" href="/pages/listings/index.html" id="navItems">Listings</a>
    </li>
    <li class="nav-item my-auto">
      <a class="btn btn-outline-light text-white rounded-0 py-1 px-4 fw-semibold" href="/pages/auth/login/index.html" id="navItems">Log in</a>
    </li>
    <li class="nav-item my-auto">
      <a class="btn btn-theme-secondary text-black rounded-0 py-1 px-4 fw-semibold" id="registerUser" href="/pages/auth/register/applicant/index.html">Register</a>
    </li>
  </ul>`);
  }
};
