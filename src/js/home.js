import { applicantView, loggedOutView } from './views/home/userViews.js';
import { Store } from './storage/storage.js';

const homeContentContainer = document.querySelector('#homepage-content');
const userRoleStore = new Store('role', undefined, true);

function displayHtmlByUserRole() {
  if (userRoleStore.state === 'Applicant') {
    homeContentContainer.innerHTML = applicantView;
  } else if (userRoleStore.state === 'company') {
    // TODO: Present HTML for company here when role is ready.
    // I don't know if the role is named 'company' or something else.
  } else {
    homeContentContainer.innerHTML = loggedOutView;
  }
}

displayHtmlByUserRole();
