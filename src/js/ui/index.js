import { header } from './header/index.js';
import { footer } from './footer/index.js';
import { checkState } from './header/index.js';
import { logout } from '../api/auth';
//import { changeTabApperence } from './admin/tabs.js';

export const displayBaseLayout = () => {
  const headerSection = header();
  if (headerSection) {
    checkState();
    const logOutBtn = document.querySelector('#signOut');
    if (logOutBtn) {
      logOutBtn.addEventListener('click', () => {
        logout();
        checkState();
      });
    }
  }
  footer();
};
