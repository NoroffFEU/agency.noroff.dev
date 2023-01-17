/**
 * Template for rendering all profiles on to page.
 */

export function userTemplate(userData) {
    const profile = document.createElement('div');
    profile.classList.add('row');

    const nameContainer = document.createElement('p');
    nameContainer.classList.add('col-5, adminTileLightGray');
    const name = userData.fullName;
    nameContainer.append(name);
    profile.appendChild(nameContainer);

    const emailContainer = document.createElement('p');
    emailContainer.classList.add('col-5, adminTileLightGray');
    const email = userData.fullName;
    emailContainer.append(email);
    profile.appendChild(emailContainer);

    const activeContainer = document.createElement('div');
    activeContainer.classList.add('col-1, d-none, d-lg-block');
    const active = document.createElement('i');
    if (userData.isActive === true) {
        active.classList.add('fa-solid, fa-check');
        activeContainer.appendChild(active);
    } else {
        active.classList.add('fa-solid, fa-xmark');
        activeContainer.appendChild(active);
    }
    profile.appendChild(activeContainer);

    const deleteProfileContainer = document.createElement('div');
    deleteProfileContainer.classList.add('col-2, col-lg-1');
    const deleteProfile = document.createElement('i');
    deleteProfile.classList.add('fa-solid, fa-trash');
    deleteProfileContainer.appendChild(deleteProfile);
    profile.appendChild(deleteProfileContainer);

    return profile;
}

export function renderUsersTemplate(userDataList, parent) {
    parent.append(...userDataList.map(userTemplate));
  }