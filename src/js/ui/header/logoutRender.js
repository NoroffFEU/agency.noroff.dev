import { getToken } from '../../api/getToken.js';

const checkLoginStatus = function () {
  const loggedIn = document.querySelectorAll(`data-visible="loggedIn"`);
  const loggedOut = document.querySelectorAll(`data-visible="loggedOut"`);

  const token = getToken();

  if (token) {
    loggedOut.forEach((item) => item.classList.add('d-none'));
  } else {
    loggedIn.forEach((item) => item.classList.add('d-none'));
  }
};

checkLoginStatus();
