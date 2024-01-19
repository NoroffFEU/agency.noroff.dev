import { getToken } from '../../api/getToken.js';
/**
 * function that checks if the user eighter is logged in or logged out, it then uses the forEach method to display items with setting the classList to d-block
 * that has eighter the attribute data-visible="loggedIn or data-visible="loggedOut 
 */
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
