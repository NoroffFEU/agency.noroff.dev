import { showUserDetails } from './showUserDetails.js';

export function handleModalData() {
  const aboutField = document.querySelector('#studentDescription');
  const skillsField = document.querySelector('#studentSkills');
  const editProfileModal = document.getElementById('editProfileModal');

  editProfileModal.addEventListener('show.bs.modal', async function () {
    const profileData = await showUserDetails();

    aboutField.innerText = profileData.about;
    skillsField.innerText = profileData.skills.join(', ');
  });
}
