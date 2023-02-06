import { logout } from '../../api/auth/index.js';

// The element id  is temporary. need to replace it with the right one.

document.quaryselector('[data-auth=logout]').addEventListener('click', logout);
