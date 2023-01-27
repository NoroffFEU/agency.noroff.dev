import { Store } from '../../storage/storage.js';

// Author Truls Haakenstad @Menubrea
// Dev Team: Frontend - User

/* To Future Developer
  I've tried to organize content in a matter that I believe should be easy to inherit. Don't expect any of this code to run, because it will certainly not. At the moment I'm writing this, the response object is still not finalized, so variables have been named more so based on familiary for you to understand and guesstimates based on available data and expectations. 

  Conditional logic I would expect to require some tweaking, based on the 3 different views available. As of now there should be at least 3 different views - company(own), user(own) and profile(other). HTML is structured in in a way where there's #studentView and #companyView, both of these are hidden by default with 'd-none'. It's possible it would make more sense to extract the role from the profile response to apply your logic as opposed to a saved key in local storage.

  Any question can be forwarded to Truls H. Haugen in Discord, or @Menubrea on github.
*/

/**
 * Setup function for profile user details
 * @param {object} data object data from user or company model
 */
export function userDetailsTemplate(data) {
  const profileImage = document.querySelector('#profileImage');
  const profileName = document.querySelector('#profileName');
  const profileRole = document.querySelector('#profileRole');
  const skillContainer = document.querySelector('#skillsContainer');
  const skillsList = document.querySelector('#skillsList');
  const descriptionHeader = document.querySelector('#descriptionHeader');
  const profileDescription = document.querySelector('#descriptionBody');

  renderProfileImage(data, profileImage);
  renderProfileName(data, profileName);
  renderProfileRole(data, profileRole);
  renderProfileSkills(data, skillsList, skillContainer);
  renderDescriptionHeader(data, descriptionHeader);
  renderProfileDescription(data, profileDescription);
}

/**
 * Function to render profile image
 * @param {object} data
 * @param {element} element
 * @returns renders html based on state
 */
export function renderProfileImage(data, element) {
  if (roleCompany()) {
    const { logo, name } = data;
    element.src = logo;
    element.alt = name + 'logo';
  } else {
    const { avatar, fullName } = data;
    element.src = avatar;
    element.alt = fullName + 'avatar';
  }
  return element;
}

/**
 * Function to render profile name
 * @param {object} data
 * @param {element} element
 * @returns Renders html based on state
 */
export function renderProfileName(data, element) {
  if (roleCompany()) {
    const { name } = data;
    element.innerHTML = name;
  } else {
    const { fullName } = data;
    element.innerHTML = fullName;
  }
  return element;
}

/**
 * Function to render profile Role
 * @param {object} data profile response
 * @param {element} element
 * @returns returns param element
 */
export function renderProfileRole(data, element) {
  if (roleCompany()) {
    const { admin } = data;
    element.innerHTML = admin;
  } else {
    const { role } = data;
    element.innerHTML = role;
  }
  return element;
}

/**
 * Function for rendering skills to parent
 * @param {object} data profile response
 * @param {element} parent
 * @param {element} element
 * @returns returns a list of skills to parent element.
 */
export function renderProfileSkills(data, parent, element) {
  if (roleCompany()) {
    element.classList.add('d-none');
    return;
  } else {
    const { skills } = data;
    skills.forEach(item, () => {
      const renderSkill = document.createElement('li');
      renderSkill.classList.add('fw-bolder', 'fs-6');
      renderSkill.innerHTML = item;

      parent.append(renderSkill);
    });
    return parent;
  }
}

/**
 * Function for rendering description header
 * @param {element} element container
 * @returns returns html based on state
 */
export function renderDescriptionHeader(element) {
  if (roleCompany) {
    element.innerHTML = 'Abous us';
  } else {
    element.innerHTML = 'About me';
  }
  return element;
}

/**
 * Function for rendering profile description
 * @param {*} data profile response
 * @param {*} element container
 * @returns returns html based on state
 */
export function renderProfileDescription(data, element) {
  if (roleCompany) {
    const { about } = data;
    element.innerHTML = about;
  } else {
    const { about } = data;
    element.innerHTML = about;
  }
  return element;
}

/**
 * Function to check if user is a company or not.
 * @returns true if condition is met
 */
export function roleCompany() {
  const roleState = new Store('role').state;

  if (roleState === 'Company') {
    return true;
  }
}
