import { getToken } from '../../api/getToken.js';


const checkLoginStatus = function () {
  const loggedIn = document.querySelectorAll(`data-visible="loggedIn"`);
  const loggedOut = document.querySelectorAll(`data-visible="loggedOut"`);

  console.log(loggedIn, loggedOut);


export const checkLoginStatus = function () {
  const loggedIn = document.querySelector(`data-visible="loggedIn"`);
  const loggedOut = document.querySelector(`data-visible="loggedOut"`);
  console.log(loggedOut);

  const token = getToken();

  if (token) {
    loggedOut.forEach((item) => item.classList.add('d-block'));
  } else {
    loggedIn.forEach((item) => item.classList.add('d-block'));
  }
};
