import { Store } from '../../storage/localStorage.mjs';

const checkLoginStatus = function () {
  const loggedIn = document.querySelectorAll(`data-visible="loggedIn"`);
  const loggedOut = document.querySelectorAll(`data-visible="loggedOut"`);

  const store = new Store('token');
  const token = store.state;

  if (token) {
    loggedOut.forEach((item) => item.classList.add('d-none'));
  } else {
    loggedIn.forEach((item) => item.classList.add('d-none'));
  }
};

checkLoginStatus();
