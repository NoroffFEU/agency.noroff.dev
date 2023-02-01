import { viewSingleListing } from './src/js/views/listings/index.js';
import { displayBaseLayout } from './src/js/ui/index.js';
import { singleApplicationTemplate } from './src/js/templates/application/student/singleApplicationTemplate.js';
import { setLoginFormListener } from './src/js/listeners/auth/index.js';
import { showRegFormListener } from './src/js/listeners/auth/showRegFormListener.js';

displayBaseLayout();

/**
 * 
 * Just a router switch do change page title and run the needed functions for each page.
 * The router switch is requiring a id on the body element of the html page. 
 * 
 * @example // Profile UI settings
                case 'dashboard':
                // Page title
                document.querySelector('title').innerText = defaultTitle + ` || ` + `Dashboard`;
                break;
 * 
 * 
 */
const routerSwitch = () => {
  // Default/Fallback page title
  const defaultTitle = 'Noroff Job';

  const routeName = document.body.id;
  switch (routeName) {
    // Homepage UI settings
    case 'homePage':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Homepage`;
      break;

    // Single listing page UI
    case 'singleListing':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Listing`;
      viewSingleListing();
      break;
    // Terms Of Use UI settings
    case 'listing':
      // Page title
      document.querySelector('title').innerText = defaultTitle;
      singleApplicationTemplate();
      break;

      case 'signIn':
      document.querySelector('title').innerText = defaultTitle;
      setLoginFormListener()
      break;


      case 'registerUser':
      document.querySelector('title').innerText = defaultTitle;
      showRegFormListener()
      break;

    // Terms Of Use UI settings
    case 'termsOfUse':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Terms Of Use`;
      break;

      // Privacy Policy UI settings
    case 'privacyPolicy':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Privacy Policy`;
      break;


    case 'studentOffer':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Student Offer`;
      break;

      // 404 UI settings
    case '404':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + '404';
      break;
    default:
  }
};
routerSwitch();


/**
 * @fileoverview This file displays different views to the user based on their login status.
 * The views displayed are for students and organizations.
 *
 * @author Jon Åstveit
 */

//For testing purposes. True=Logged in.
const studentIsLoggedIn = false
const organisationIsLoggedIn = true
const section2Container = document.querySelector(".section2")

/**
 * @constant
 * @type {string}
 * @description The HTML template displayed to a logged in student.
 */
const studentView = `
<div class="bg-theme-light col-12 col-lg-10 d-flex row text-center offset-lg-2 text-md-start p-3">
<div class="col-12 col-md-4 mb-3 mb-md-0">
<h2 class="d-md-none fw-bold">Update your profile to showcase your skills</h2>

<div class="imgContainer">
<img class="" src="
https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png
" alt="" />
</div>
</div>
<div class="col-12 col-md-6 ms-md-5 row col-xxl-4">
<h2 class="d-none d-md-block fw-bold">Update your profile to showcase your skills</h2>
<p><span class="fw-semibold">Find talents for your organisation.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div class="buttonContainer mx-auto mx-md-0">
<button class="btn customButton btn-theme-primary text-theme-light fw-semibold w-100">Update Profile</button>
</div>
</div>
</div>
<div class="bg-theme-light col-12 col-lg-10 d-flex row text-center text-md-start mt-5 justify-content-end p-3">
<div class="col-12 col-md-6 col-xxl-4 order-1 me-md-5 order-md-0 row justify-content-end">
<h2 class="d-none d-md-block fw-bold">View all of your applications</h2>
<p><span class="fw-semibold">Talents for your organisation.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div class="buttonContainer mx-auto mx-md-0">
<button class="btn customButton btn-theme-primary text-theme-light fw-semibold w-100">View applications</button>
</div>
</div>
<div class="col-12 col-md-4 mb-3 mb-md-0">
<h2 class="d-md-none fw-bold">View all of your applications</h2>
<div class="imgContainer">
<img class="img-fluid" src="
https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png
" alt="" />
</div>
</div>
</div>
`

/**
 * @constant
 * @type {string}
 * @description The HTML template displayed to a logged in organization.
 */
const organisationView = `

<div class="col">
<div class="shadow-sm d-flex p-3">
  <div style="width: 200px">
    <img src="https://www.seekpng.com/png/detail/246-2468199_logo-placeholder-png-white.png" alt="logo" />
  </div>
  <div class="ms-3">
    <h3 class="fw-semibold">Listing title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
    <div class="d-flex justify-content-between align-items-baseline">
      <p>(3) Applications</p>
      <p>EndsAt</p>
      <button class="btn btn-theme-primary text-theme-light d-none d-md-flex">View</button>
    </div>
  </div>
</div>
</div>
`

/**
 * @function
 * @description Creates the HTML for the organization view and sets it as the innerHTML of the section2Container element.
 */
function createOrginisationViewHtml() {
  if (organisationIsLoggedIn) {
    let html = ""
    for (let i = 0; i < 4; i++) {
      html += organisationView
    }
    section2Container.innerHTML = `
    <div class="bg-theme-light p-lg-5 container-lg seaction2Company">
    <h2 class="text-center fw-semibold">Our listings</h2>
    <div class="row row-cols-1 row-cols-md-2 g-5 listingsContainer">
    ${html}
    </div>
  </div>
    `
  }
}

/**
 * @function
 * @description Creates the HTML for the student view and sets it as the innerHTML of the section2Container element.
 */
function createStudentViewHtml() {
  if (studentIsLoggedIn) {
    section2Container.innerHTML = studentView
  }
}

// createStudentViewHtml()
// createOrginisationViewHtml()
