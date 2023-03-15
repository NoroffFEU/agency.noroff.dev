// Author: Jonas Hope
// Team: Warrior Gallop

/**
 * Function for adding/removing borders on tabs.
 */

const tabsUser = document.querySelector('#tabsUser');
const tabsListing = document.querySelector('#tabsListing');
const tabsOffers = document.querySelector('#tabsOffers');
const tabsApplication = document.querySelector('#tabsApplication');

export function changeTabApperence() {
  tabsOffers.addEventListener('click', (e) => {
    e.preventDefault();

    tabsListing.classList.remove('border-end');
    tabsOffers.classList.remove('border-end');

    tabsUser.classList.add('border-end');
  });

  tabsListing.addEventListener('click', (e) => {
    e.preventDefault();

    tabsUser.classList.remove('border-end');
    tabsListing.classList.remove('border-end');

    tabsOffers.classList.add('border-end');
  });

  tabsUser.addEventListener('click', (e) => {
    e.preventDefault();

    tabsUser.classList.remove('border-end');

    tabsOffers.classList.add('border-end');
    tabsListing.classList.add('border-end');
  });

  tabsApplication.addEventListener('click', (e) => {
    e.preventDefault();

    tabsOffers.classList.remove('border-end');

    tabsUser.classList.add('border-end');
    tabsListing.classList.add('border-end');
  });
}

changeTabApperence();
