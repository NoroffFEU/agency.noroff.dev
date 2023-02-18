import { organisationView, studentView } from './constants.js';

/**
 * @fileoverview This file displays different views to the user based on their login status.
 * The views displayed are for students and organizations.
 *
 * @author Jon Åstveit
 */

//For testing purposes. True=Logged in.
const studentIsLoggedIn = false;
const organisationIsLoggedIn = true;
const section2Container = document.querySelector('.section2');

/**
 * @function
 * @description Creates the HTML for the organization view and sets it as the innerHTML of the section2Container element.
 */
export function createOrganisationViewHtml() {
  if (organisationIsLoggedIn) {
    let html = '';
    for (let i = 0; i < 4; i++) {
      html += organisationView;
    }
    section2Container.innerHTML = `
    <div class="bg-theme-light p-lg-5 container-lg section2Company">
    <h2 class="text-center fw-semibold">Our listings</h2>
    <div class="row row-cols-1 row-cols-md-2 g-5 listingsContainer">
    ${html}
    </div>
  </div>
    `;
  }
}

/**
 * @function
 * @description Creates the HTML for the student view and sets it as the innerHTML of the section2Container element.
 */
export function createStudentViewHtml() {
  if (studentIsLoggedIn) {
    section2Container.innerHTML = studentView;
  }
}
