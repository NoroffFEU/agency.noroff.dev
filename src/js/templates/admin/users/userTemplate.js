// Author: Stian Kornbakk & Jonas Hope
// Team: FE-User

/**
 * Template for rendering user onto page.
 */

export function userTemplate(userData) {
  const profile = document.createElement('div');
  profile.classList.add('stripes', 'd-flex');

  const userInfoContainer = document.createElement('div');
  userInfoContainer.classList.add('d-flex', 'col-10');

  const nameContainer = document.createElement('p');
  nameContainer.classList.add('col-6', 'px-2', 'py-3', 'mb-0', 'overflow-hidden', 'listing-border');
  const name = userData.fullName;
  nameContainer.append(name);
  userInfoContainer.appendChild(nameContainer);

  const emailContainer = document.createElement('p');
  emailContainer.classList.add('col-6', 'px-2', 'py-3', 'mb-0', 'overflow-hidden', 'listing-border');
  const email = userData.email;
  emailContainer.append(email);
  userInfoContainer.appendChild(emailContainer);

  profile.appendChild(userInfoContainer);

  const listingIconsContainer = document.createElement('div');
  listingIconsContainer.classList.add('d-flex', 'w-100', 'bg-white', 'justify-content-between');

  const activeContainer = document.createElement('div');
  activeContainer.classList.add('mx-auto', 'd-none', 'd-lg-block', 'bg-white', 'text-center', 'my-3', 'd-flex', 'align-self-center');
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
  listingIconsContainer.appendChild(activeContainer);

  const deleteProfileButton = document.createElement('button');
  deleteProfileButton.classList.add('mx-auto', 'text-center', 'my-3', 'border-0', 'bg-white', 'p-0');
  const deleteProfileIcon = document.createElement('img');
  deleteProfileIcon.src = '/src/assets/icons/delete-black.svg';
  deleteProfileIcon.classList.add('deleteIcon');
  deleteProfileButton.appendChild(deleteProfileIcon);
  listingIconsContainer.appendChild(deleteProfileButton);

  profile.appendChild(listingIconsContainer);

  return profile;
}
