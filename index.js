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
  const defaultTitle = 'Add default title';

  const routeName = document.body.id;
  switch (routeName) {
    // Homepage UI settings
    case 'homepage':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Homepage`;
      break;

    // Profile UI settings
    case 'dashboard':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `Dashboard`;
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