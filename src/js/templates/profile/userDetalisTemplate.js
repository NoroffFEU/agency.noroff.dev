import { Store } from './../../storage/storage.js';

// Author Truls Haakenstad @Menubrea
// Dev Team: Frontend - User

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
 * @returns returns param element
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

export function renderProfileSkills(data, parent, element) {
  if (roleCompany()) {
    element.classList.add('d-none');
  } else {
    const { skills } = data;
    skills.forEach(item, () => {
      const renderSkill = document.createElement('li');
      renderSkill.classList.add('fw-bolder', 'fs-6');
      renderSkill.innerHTML = item;

      parent.append(renderSkill);
    });
  }

  return parent;
}

export function renderDescriptionHeader(element) {
  if (roleCompany) {
    element.innerHTML = 'Abous us';
  } else {
    element.innerHTML = 'About me';
  }
  return element;
}

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
