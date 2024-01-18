import { showUserDatails } from './showUserDetails.js';

export function handleModalData() {
  const aboutField = document.querySelector('#studentDescription');
  const skillsField = document.querySelector('#studentSkills');
  const editProfileModal = document.getElementById('editProfileModal');

  editProfileModal.addEventListener('show.bs.modal', async function () {
    const profileData = await showUserDatails();

    aboutField.value = profileData.about;
    skillsField.value = profileData.skills.join(', ');
  });
}