import { viewSingleListing } from './src/js/views/listings/index.js';
import * as ui from './src/js/ui/index.js';

ui.displayBaseLayout();

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
    case 'termsOfUse':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Terms Of Use`;
      break;

    // Privacy Policy UI settings
    case 'privacyPolicy':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Privacy Policy`;
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