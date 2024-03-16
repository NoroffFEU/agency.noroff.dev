import { showUserDetails } from './showUserDetails.js';

export function handleModalData() {
  const aboutField = document.querySelector('#studentDescription');
  console.log(aboutField);
  const skillsField = document.querySelector('#studentSkills');
  const editProfileModal = document.getElementById('editProfileModal');

  editProfileModal.addEventListener('show.bs.modal', async function () {
    try {
      const profileData = await showUserDetails();

      if (profileData) {
        aboutField.innerText = profileData.about;
        skillsField.innerText = profileData.skills.join(', ');
      } else {
        aboutField.innerText = '';
        skillsField.innerText = '';
      }
    } catch (error) {
      console.error(error);
    }
  });
}
