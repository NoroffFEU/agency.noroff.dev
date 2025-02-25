const profileImage = document.querySelector('#profileImage');
const userName = document.querySelector('#profileName');
const applicantRole = document.querySelector('#profileRole');
const companyContact = document.querySelector('#profileContact');
const skillsList = document.querySelector('#skillsList');
const descriptionHeader = document.querySelector('#descriptionHeader');
const profileDescription = document.querySelector('#descriptionBody');
const editUserForm = document.querySelector('#editStudentProfile');

/**
 * @description Renders content on Applicant profile page
 * @param {object} data object data on user
 */

export function applicantProfile(data) {
  const { firstName, lastName } = data;
  userName.innerText = firstName + ' ' + lastName;
  profileImage.src =
    data.avatar ||
    'https://miniforetak.no/wp-content/plugins/buddyboss-platform/bp-core/images/profile-avatar-buddyboss.png';
  profileImage.alt = (userName.innerText || 'Unknown') + 'avatar';
  applicantRole.innerText = data.role;
  companyContact.classList.add('d-none');
  const { skills } = data; // SkillsContainer
  skillsList.innerHTML = '';

  if (Array.isArray(skills) && skills.length > 0) {
    skills.forEach((item) => {
      const renderSkill = document.createElement('li');
      renderSkill.classList.add('fw-bolder', 'fs-6', 'ms-0');
      renderSkill.innerText = item.trim();
      skillsList.append(renderSkill);
    });
  }
  descriptionHeader.innerText = 'About me';
  profileDescription.textContent = data.about;
  editUserForm.classList.remove('d-none');
}
