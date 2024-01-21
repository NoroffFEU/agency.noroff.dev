import { Store } from '../../storage/storage.js';

const tokenStore = new Store('token');
/**
 * function that checks if the value of tokenStore.state is truthy or falsy, the function returns true if the user is logged in and the tokenStore.state is truthy and,
 *  false if tokenStore.state is falsy
 * @returns {boolean}
 */
export function isUserLoggedIn() {
  return !!tokenStore.state;
}
/**
 * function that redirects the user when they press the viewListingsButton it redirects the user eighter to the listing specific page
 * if the user is logged in or to the login page if they are not
 */
const addEvent = setInterval(() => {
  const viewListingsButton = document.getElementById('viewListingsButton');

  viewListingsButton?.addEventListener('click', function () {
    if (isUserLoggedIn()) {
      window.location.href = '/pages/listings/index.html';
    } else {
      window.location.href = '/pages/auth/login/index.html';
    }
    clearInterval(addEvent);
  });
}, 50);
