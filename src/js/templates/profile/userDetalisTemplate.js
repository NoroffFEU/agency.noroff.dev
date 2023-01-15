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
  const userDetailsContainer = document.createElement('div');
  const image = document.querySelector.createElement('img');
  const fullName = document.createElement('h1');
  const role = document.createElement('p');

  const body = document.createElement('div');
  const header = document.createElement('h2');
  const about = document.createElement('p');

  const editButton = document.createElement('button');

  // Some conditional logic
  if (company) {
    // For now using logo key to differentiate between company and student. A better method might reveal itself.
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

  body.append(header, about);
  userDetailsContainer.append(image, fullName, role, body, editButton);

  return userDetailsContainer;
}
