// Author: Stian Kornbakk
// Team: FE-User

// Updated 15.03.23 by Jonas Hope - warrior Gallop team

//-------- Commented out for now, as there was 2 different views made. ----------//

/**
 * Template for rendering user onto page.
 */
/*
export function userTemplate(userData) {
  const profile = document.createElement('div');
  profile.classList.add('stripes', 'd-flex');

  const userInfoContainer = document.createElement('div');
  userInfoContainer.classList.add('d-flex', 'col-10');

  const nameContainer = document.createElement('p');
  nameContainer.classList.add('col-6', 'px-2', 'py-3', 'mb-0', 'overflow-hidden', 'small');
  const name = userData.fullName;
  nameContainer.append(name);
  userInfoContainer.appendChild(nameContainer);

  const emailContainer = document.createElement('p');
  emailContainer.classList.add('col-6', 'px-2', 'py-3', 'mb-0', 'overflow-hidden', 'small', 'fw-light');
  const email = userData.email;
  emailContainer.append(email);
  userInfoContainer.appendChild(emailContainer);

  profile.appendChild(userInfoContainer);

  const listingIconsContainer = document.createElement('div');
  listingIconsContainer.classList.add('d-flex', 'w-100', 'justify-content-between');

  const activeContainer = document.createElement('div');
  activeContainer.classList.add('mx-auto', 'd-none', 'd-lg-block', 'text-center', 'my-3', 'd-flex', 'align-self-center');
  const active = document.createElement('img');
  if (userData.isActive === true) {
    active.src = '/public/assets/icons/checkmark.svg';
    active.classList.add('activeIcon');
    activeContainer.appendChild(active);
  } else {
    active.src = '/public/assets/icons/cancel.svg';
    active.classList.add('inActiveIcon');
    activeContainer.appendChild(active);
  }

  const deleteProfileButton = document.createElement('button');
  deleteProfileButton.classList.add('mx-auto', 'text-center', 'my-3', 'border-0', 'p-0', 'bg-transparent');
  const deleteProfileIcon = document.createElement('img');
  deleteProfileIcon.src = '/public/assets/icons/delete-black.svg';
  deleteProfileIcon.classList.add('deleteIcon');
  deleteProfileButton.appendChild(deleteProfileIcon);

  listingIconsContainer.appendChild(activeContainer);
  listingIconsContainer.appendChild(deleteProfileButton);

  profile.appendChild(listingIconsContainer);

  return profile;
}
*/
