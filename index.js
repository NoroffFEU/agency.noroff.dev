import { renderListing } from './src/js/templates/listings/renderListing.js';
import { displayBaseLayout } from './src/js/ui/index.js';
import { singleApplicationTemplate } from './src/js/templates/application/student/singleApplicationTemplate.js';
import { setLoginFormListener } from './src/js/listeners/auth/index.js';
import { showRegFormListener } from './src/js/listeners/auth/showRegFormListener.js'; // don´t need this
import { renderListings } from './src/js/templates/listings/renderListings.js';
import { editListingListener } from './src/js/listeners/post/editListings.js';
import { profileRouter } from './src/js/listeners/profile/index.js';
import { adminRouter } from './src/js/views/admin/adminRouter.js';
import { setRegisterFormListenerApplicant } from './src/js/listeners/auth/index.js'; // for applicant
import { setRegisterFormListenerCompany } from './src/js/listeners/auth/index.js'; // for company
import { createListing } from './src/js/listeners/post/createListing.js';
import { showListings } from './src/js/views/admin/showListings.js';
import { searchListings, filterListings } from './src/js/listeners/post/searchListing.js';
import '/src/scss/index.scss';
import { deleteItem } from './src/js/api/posts/deleteListing.js';

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
      document.querySelector('title').innerText = defaultTitle + ` || Homepage`;
      break;

    case 'adminPage':
      document.querySelector('title').innerText = defaultTitle + ` || Adminpage`;
      adminRouter();
      break;

    // Single listing page UI (PAGE DOESNT EXIST YET)
    case 'singleListing':
      document.querySelector('title').innerText = defaultTitle + ` || listing`;
      renderListing()
      break;

    // Listing UI settings
    case 'listing':
      document.querySelector('title').innerText = defaultTitle + ` || Listings`;
      renderListings();
      deleteItem();
      editListingListener();
      break;

    // Listings UI settings
    case 'listings':
      document.querySelector('title').innerText = defaultTitle + ` || Job Listings`;
      // showListings();
      renderListings();
      searchListings();
      filterListings();
      break;

    // TBD Listings UI settings
    case 'listingsPage':
      document.querySelector('title').innerText = defaultTitle + ` || Job Listings`;
      showListings();
      break;

    // Sign in UI settings
    case 'signIn':
      document.querySelector('title').innerText = defaultTitle + ` || Sign In`;
      setLoginFormListener();
      break;

    // // Edit listing UI settings
    // case 'editListing':
    //   document.querySelector('title').innerText = defaultTitle + ` || editListing`;
    //   editListingListener();
    //   break;

    // Create listing UI settings
    case 'createListing':
      document.querySelector('title').innerText = defaultTitle + ` || createListing`;
      createListing();
      break;

    // Register user UI settings
    case 'registerUser':
      document.querySelector('title').innerText = defaultTitle + ` || Register User`;
      showRegFormListener();
      break;

    // Register applicant UI settings
    case 'registerPageApplicant':
      document.querySelector('title').innerText = defaultTitle + ` || Register Applicant`;
      setRegisterFormListenerApplicant();
      break;

    // Register company UI settings
    case 'registerPageCompany':
      document.querySelector('title').innerText = defaultTitle + ` || Register Company`;
      setRegisterFormListenerCompany();
      break;

    // Profile UI settings
    case 'profilePage':
      document.querySelector('title').innerText = defaultTitle + ` || Profile`;
      profileRouter();
      break;

    // Student offer UI settings
    case 'studentOffer':
      document.querySelector('title').innerText = defaultTitle + ` || Student Offer`;
      break;

    // Create offer UI settings
    case 'offerPage':
      document.querySelector('title').innerText = defaultTitle + ` || Create Offer`;
      break;

    // Apply UI settings
    case 'applyPage':
      document.querySelector('title').innerText = defaultTitle + ` || Apply`;
      break;

    // Single application UI settings
    case 'singleApplicationPage':
      //Title could be changed to applicants name
      document.querySelector('title').innerText = defaultTitle + ` || Applicant`;
      singleApplicationTemplate();
      break;

    // Terms Of Use UI settings
    case 'termsOfUse':
      document.querySelector('title').innerText = defaultTitle + ` || Terms Of Use`;
      break;

    // Privacy Policy UI settings
    case 'privacyPolicy':
      document.querySelector('title').innerText = defaultTitle + ` || Privacy Policy`;
      break;

    // 404 UI settings (PAGE DOESNT EXIST YET)
    case '404':
      document.querySelector('title').innerText = defaultTitle + ` || ` + '404';
      break;
    default:
  }
};
routerSwitch();
