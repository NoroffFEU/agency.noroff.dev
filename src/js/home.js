import { applicantView, loggedOutView } from './views/home/userViews.js';
const homeContentContainer = document.querySelector('#homepage-content');

const userRole = localStorage.getItem('Role');

function displayHtmlByUserRole() {
  if (userRole === 'user') {
    homeContentContainer.innerHTML = applicantView;
  } else if (userRole === 'company') {
    // TODO: Present HTML for company here when role is ready.
    // I don't know if the role is named 'company' or something else.
  } else {
    homeContentContainer.innerHTML = loggedOutView;
  }
}

displayHtmlByUserRole();
