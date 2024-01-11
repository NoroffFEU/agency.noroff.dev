// frontpage script
import { applicantView } from './views/home/userViews.js';
const defaultContentContainer = document.querySelector('#default-homepage-content');
const applicantContentContainer = document.querySelector('#applicant-homepage-view');

const userRole = localStorage.getItem('Role');
console.log(userRole);

function displayHtmlByUserRole() {
  console.log(userRole);
  if (userRole === 'user') {
    defaultContentContainer.style.display = 'none';
    applicantContentContainer.innerHTML = applicantView;
  }
}
displayHtmlByUserRole();
