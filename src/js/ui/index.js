import { header } from './header/index.js';
import { checkState } from './header/index.js';
import { footer } from './footer/index.js';
import { boldNavElement } from './header/currentlyOn.js';
//import { changeTabApperence } from './admin/tabs.js';
/**
 * function that checks id the headerSection is truthy if so it runs two functions that completes the header,
 * the function also runs the function footer() regardless which completes the footer
 */
export const displayBaseLayout = () => {
  const headerSection = header();
  if (headerSection) {
    checkState();
    boldNavElement();
  }
  footer();
};
