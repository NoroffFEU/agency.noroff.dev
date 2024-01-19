import { showUserDatails } from './showUserDetails.js';

export function handleModalData() {
  const skillsField = document.querySelector('#studentSkills');
  const editProfileModal = document.getElementById('editProfileModal');

  editProfileModal.addEventListener('show.bs.modal', async function () {
    const profileData = await showUserDatails();

    skillsField.innerText = profileData.skills.join(', ');
  });
}