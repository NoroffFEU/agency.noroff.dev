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
  // Mariusz Rozycki as phoenix QA -
  // I changed 'applicantRole.innerText = data.title' to 'applicantRole.innerText = data.title'
  // to render applicantRole on 'edit website'.
  // Then tests:
  // 'should login successfully with the correct credentials'
  // 'should logout successfully'
  // from file login.cy.js are passing.
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

  // Favorite listings section
  // The profile view will have a container component that will display the favorite listings of the Applicant.
  // That code goes here
}
