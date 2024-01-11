import { Store } from '../../storage/storage.js';

const tokenStore = new Store('token', undefined, true);

export function isUserLoggedIn() {
  return !!tokenStore.state;
}

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
