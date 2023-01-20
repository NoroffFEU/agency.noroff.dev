import { Store } from './../../storage/storage.js';

// Author Truls Haakenstad @Menubrea
// Dev Team: Frontend - User

/**
 * Setup function for profile user details
 * @param {object} data object data from user or company model
 */
export function userDetailsTemplate(data) {
  const profileContainer = document.querySelector('#profileContainer');

  renderUserDetails(data, profileContainer);
}

/**
 * Function for rendering user details on profile page
 * @param {object} data object data from user model or company model
 * @returns Renders user details on profile page
 */
export function renderUserDetails(data, parent) {
  // Elements
  const userDetailsContainer = document.createElement('div');
  const image = document.createElement('img');
  const fullName = document.createElement('h1');
  const role = document.createElement('p');

  const body = document.createElement('div');
  const header = document.createElement('h2');
  const about = document.createElement('p');

  const editButton = document.createElement('button');

  // Classes
  image.classList.add('rounded-circle', 'd-block', 'mx-auto', 'w-25');
  fullName.classList.add('text-center', 'mt-3');
  role.classList.add('text-center', 'fs-2', 'fw-lighter');
  body.classList.add('px-4', 'pt-3', 'pb-2', 'bg-theme-light', 'my-2', 'shadow', 'mx-auto', 'rounded-4', 'my-3', 'maxWidthProfileContainer');
  header.classList.add('fs-5');
  editButton.classList.add('btn', 'btn-dark', 'd-block', 'mx-auto');

  // Dummy Data
  image.src = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';

  fullName.innerHTML = 'Peter Parker';
  role.innerHTML = 'Front-End Developer';

  const skillContainer = document.createElement('div');
  const skillWrapper = document.createElement('div');
  const skillHeader = document.createElement('h2');
  skillHeader.innerHTML = 'Skills';

  skillContainer.append(skillHeader, skillWrapper);
  skillHeader.classList.add('fs-5');
  skillContainer.classList.add('px-4', 'py-3', 'bg-theme-light', 'my-2', 'shadow', 'mx-auto', 'rounded-4', 'my-3', 'maxWidthProfileContainer');
  skillWrapper.classList.add('d-flex', 'gap-3', 'flex-wrap');

  const skills = ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Bootstrap', 'React'];
  skills.forEach((skill) => {
    const renderSkill = document.createElement('span');

    renderSkill.classList.add('fw-bolder', 'fs-6');
    renderSkill.innerHTML = skill;

    skillWrapper.append(renderSkill);
  });

  header.innerHTML = 'About Me';
  about.innerHTML = `Hello Everyone! Just your friendly neighbourhood WEB developer! Get it?

  I specialize in solving and fixing WCAG crimes, but I do not fight bugs, whatsoever! Bugs are friends that tell us what's wrong with our code, which is very important for learning.`;

  // Some conditional logic needs to be applied
  // if (company) {
  //   const { name, logo, admin } = data;

  //   image.src = logo;
  //   image.alt = `${name}'s logo`;

  //   fullName.innerHTML = name;
  //   role.innerHTML = admin; //admin? Also an array. Placeholder

  //   header.innerHTML = 'About Us';
  //   about.innerHTML = 'Lorem Ipsum'; // Placeholder
  // } else {
  //   const { firstName, lastName, avatar, role } = data;

  //   image.src = avatar;
  //   image.alt = `${firstName} ${lastName}'s avatar`;

  //   fullName.innerHTML = firstName + lastName;
  //   role.innerHTML = role;

  //   header.innerHTML = 'About Me';
  //   about.innerHTML = 'Lorem Ipsum'; // Placeholder
  // }

  editButton.innerHTML = 'Edit Profile';

  // Appending
  body.append(header, about);
  userDetailsContainer.append(image, fullName, role, skillContainer, body, editButton);
  parent.append(userDetailsContainer);

  return userDetailsContainer;
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

export function renderProfileSkills(data, parent) {
  if (roleCompany()) return;

  const { skills } = data;
  skills.forEach(item, () => {
    const renderSkill = document.createElement('li');
    renderSkill.classList.add('fw-bolder', 'fs-6');
    renderSkill.innerHTML = item;

    parent.append(renderSkill);
  });

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
