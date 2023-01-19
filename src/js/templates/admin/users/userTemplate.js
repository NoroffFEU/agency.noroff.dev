/**
 * Template for rendering users onto page.
 */

export function userTemplate(userData) {
  const profile = document.createElement('div');
  profile.classList.add('row', 'ps-2', 'px-md-5');

  const nameContainer = document.createElement('p');
  nameContainer.classList.add('col-5', 'bg-light', 'px-2', 'py-3', 'mb-2', 'overflow-hidden');
  const name = userData.fullName;
  nameContainer.append(name);
  profile.appendChild(nameContainer);

  const emailContainer = document.createElement('p');
  emailContainer.classList.add('col-5', 'bg-light', 'px-2', 'py-3', 'mb-2', 'overflow-hidden');
  const email = userData.email;
  emailContainer.append(email);
  profile.appendChild(emailContainer);

  const activeContainer = document.createElement('div');
  activeContainer.classList.add('col-1', 'd-none', 'd-lg-block', 'text-center', 'my-3', 'mb-4', 'd-flex', 'align-self-center');
  const active = document.createElement('img');
  if (userData.isActive === true) {
    active.src = '/src/assets/icons/checkmark.svg';
    active.classList.add('activeIcon');
    activeContainer.appendChild(active);
  } else {
    active.src = '/src/assets/icons/cancel.svg';
    active.classList.add('inActiveIcon');
    activeContainer.appendChild(active);
  }
  profile.appendChild(activeContainer);

  const deleteProfileButton = document.createElement('button');
  deleteProfileButton.classList.add('col-2', 'col-lg-1', 'text-center', 'my-3', 'mb-4', 'border-0', 'bg-white');
  const deleteProfileIcon = document.createElement('img');
  deleteProfileIcon.src = '/src/assets/icons/delete-black.svg';
  deleteProfileIcon.classList.add('deleteIcon');
  deleteProfileButton.appendChild(deleteProfileIcon);
  profile.appendChild(deleteProfileButton);

  return profile;
}
