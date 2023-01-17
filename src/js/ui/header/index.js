<<<<<<< HEAD
=======
/**
 * 
 * This function is creating the content inside the header tag on each page
 * 
 * @returns base header element 
 * 
 * 
 */
>>>>>>> FE-offers
export const header = () => {
  const headerElement = document.querySelector('header');
  headerElement.classList.add('bg-theme-dark');

  return (headerElement.innerHTML = `<div class="container-fluid">
<<<<<<< HEAD
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="" class="Logo-noroff" />
            <div class="d-flex flex-column">
                <span class="company_name text-white">Noroff</span>
                <span class="company_branch text-white">Job Agency</span>
            </div>
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav gap-2">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Listings</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-outline-light text-white" href="#">Sign in</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-theme-secondary text-black">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>`);
};
=======
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <div class="d-flex gap-2">
          <img src="/src/assets/icons/noroff-logo.svg" class="Logo-noroff" />
          <div class="d-flex flex-column">
              <span class="company_name text-white">Noroff</span>
              <span class="company_branch text-white">Job Agency</span>
          </div>
          </div>
      </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          
        </div>
      </div>
    </nav>
</div>`);
};

let pageTitle = document.querySelector('title');
pageTitle.innerText = 'Standard';


// For testing states
const stateValue = "null"
localStorage.setItem("Role", stateValue)


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
    pageTitle.innerText = 'Profile';

    return (navBarNav.innerHTML = `<ul class="navbar-nav gap-2">
    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" href="#">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Listings</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-outline-light text-white" href="#" id="signOut">Log out</a>
    </li>
  </ul>`);
  }

  if (role == 'admin') {
    pageTitle.innerText = 'Admin';

    return (navBarNav.innerHTML = `<ul class="navbar-nav gap-2">
    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" href="#">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Listings</a>
    </li>
    <li class="nav-item">
    <a class="btn btn-outline-light text-white" href="#" id="logOutUser">Log out</a>
    </li>
  </ul>`);
  }

  if (role == 'null') {
    pageTitle.innerText = 'Not logged in';

    return (navBarNav.innerHTML = `<ul class="navbar-nav gap-2">
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Listings</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-outline-light text-white" href="#" id="signInUser">Sign in</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-theme-secondary text-black" id="registerUser">Register</a>
    </li>
  </ul>`);
  }
};
>>>>>>> FE-offers
