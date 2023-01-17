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
  const image = document.querySelector.createElement('img');
  const fullName = document.createElement('h1');
  const role = document.createElement('p');

  const body = document.createElement('div');
  const header = document.createElement('h2');
  const about = document.createElement('p');

  const editButton = document.createElement('button');

  // Classes
  image.classList.add('rounded-circle', 'd-block', 'mx-auto');
  fullName.classList.add('text-center');
  role.classList.add('text-center');
  body.classList.add('p-2', 'bg-theme-light', 'my-2');
  editButton.classList.add('btn btn-dark');

  // Some conditional logic needs to be applied
  if (company) {
    const { name, logo, admin } = data;

    image.src = logo;
    image.alt = `${name}'s logo`;

    fullName.innerHTML = name;
    role.innerHTML = admin; //admin? Also an array. Placeholder

    header.innerHTML = 'About Us';
    about.innerHTML = 'Lorem Ipsum'; // Placeholder
  } else {
    const { firstName, lastName, avatar, role } = data;

    image.src = avatar;
    image.alt = `${firstName} ${lastName}'s avatar`;

    fullName.innerHTML = firstName + lastName;
    role.innerHTML = role;

    header.innerHTML = 'About Me';
    about.innerHTML = 'Lorem Ipsum'; // Placeholder
  }

  editButton.innerHTML = 'Edit Profile';

  // Appending
  body.append(header, about);
  userDetailsContainer.append(image, fullName, role, body, editButton);
  parent.append(userDetailsContainer);

  return userDetailsContainer;
}
