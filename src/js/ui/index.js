import { header } from './header/index.js';
import { footer } from './footer/index.js';
import { checkState } from './header/index.js';

export const displayBaseLayout = () => {
const headerSection = header();
  if (headerSection) {
    checkState();
  }
  footer();
};
