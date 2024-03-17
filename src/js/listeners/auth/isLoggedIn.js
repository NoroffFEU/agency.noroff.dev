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
 
//Changes made on function according to recommendation by QA
const addEvent = setInterval(() => {
  const viewListingsButton = document.getElementById('viewListingsButton');
 
  if (viewListingsButton) {
    viewListingsButton.addEventListener('click', function () {
      window.location.href = '/pages/listings/index.html';
    });
 
    clearInterval(addEvent);
  }
}, 50);