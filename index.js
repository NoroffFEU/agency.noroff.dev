import { viewSingleListing } from './src/js/views/listings/index.js';
import { displayBaseLayout } from './src/js/ui/index.js';
import { singleApplicationTemplate } from './src/js/templates/application/student/singleApplicationTemplate.js';
import { setLoginFormListener } from './src/js/listeners/auth/index.js';
import { searchListings } from './src/js/listeners/post/searchListing.js';
import { showRegFormListener } from './src/js/listeners/auth/showRegFormListener.js';
import { renderListings } from './src/js/templates/listings/renderListings.js';
import { profileRouter } from './src/js/listeners/profile/index.js';
import { adminRouter } from './src/js/views/admin/adminRouter.js';

import { setRegisterFormListenerApplicant } from './src/js/listeners/auth/index.js'; // for applicant
import { setRegisterFormListenerCompany } from './src/js/listeners/auth/index.js'; // for company

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
      document.querySelector('title').innerText = defaultTitle + ` || Homepage`;
      adminRouter();
      break;

    // Single listing page UI
    case 'singleListing':
      document.querySelector('title').innerText = defaultTitle + ` || Listing`;
      viewSingleListing();
      break;

    case 'listings':
      document.querySelector('title').innerText = defaultTitle + ` || Listings`;
      renderListings();
      searchListings();
      break;

    // Listing UI settings
    case 'listing':
      document.querySelector('title').innerText = defaultTitle;
      renderListings();
      break;

    // Sign in UI settings
    case 'signIn':
      document.querySelector('title').innerText = defaultTitle;
      setLoginFormListener();
      break;

    // Register user UI settings
    case 'registerUser':
      document.querySelector('title').innerText = defaultTitle;
      // showRegFormListener();
<<<<<<< HEAD
      break;

    // Register applicant UI settings

    case 'registerPageApplicant':
      document.querySelector('title').innerText = defaultTitle;
      setRegisterFormListenerApplicant();
      break;

    case 'registerPageCompany':
      document.querySelector('title').innerText = defaultTitle;
      setRegisterFormListenerCompany();
=======
>>>>>>> majestic-gallop-formListeners
      break;

    // Profile UI settings
    case 'profilePage':
      document.querySelector('title').innerText = defaultTitle;
      profileRouter();
      break;

    // Student offer UI settings
    case 'studentOffer':
      document.querySelector('title').innerText = defaultTitle + ` || Student Offer`;
      break;

    // Terms Of Use UI settings
    case 'termsOfUse':
      document.querySelector('title').innerText = defaultTitle + ` || Terms Of Use`;
      break;

    // Privacy Policy UI settings
    case 'privacyPolicy':
      document.querySelector('title').innerText = defaultTitle + ` || Privacy Policy`;
      break;

    // 404 UI settings
    case '404':
      document.querySelector('title').innerText = defaultTitle + ` || ` + '404';
      break;
    default:
  }
};
routerSwitch();
