import { header } from './header/index.js';
import { footer } from './footer/index.js';
import { checkState } from './header/index.js';
//import { changeTabApperence } from './admin/tabs.js';

export const displayBaseLayout = () => {
  const headerSection = header();
  if (headerSection) {
    checkState();
  }
  footer();
};

// {document.addEventListener('DOMContentLoaded', (event) => {
//   checkState();
// });}
