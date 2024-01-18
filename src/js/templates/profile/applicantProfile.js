const profileImage = document.querySelector('#profileImage');
const userName = document.querySelector('#profileName');
const applicantRole = document.querySelector('#profileRole');
const companyContact = document.querySelector('#profileContact');
// const skillContainer = document.querySelector('#skillsContainer');
const skillsList = document.querySelector('#skillsList');
const descriptionHeader = document.querySelector('#descriptionHeader');
const profileDescription = document.querySelector('#descriptionBody');

/**
 * @description Renders content on Applicant profile page
 * @param {object} data object data on user
 */
export function applicantProfile(data) {
  // Profile section
  const { avatar, fullName } = data; // Avatar
  profileImage.src =
    avatar ||
    'https://miniforetak.no/wp-content/plugins/buddyboss-platform/bp-core/images/profile-avatar-buddyboss.png';
  profileImage.alt = (fullName || 'Unknown') + 'avatar';
  const { firstName, lastName } = data; // Applicant name
  userName.innerText = firstName + ' ' + lastName;
  const role = data.title; // Applicant role
  applicantRole.innerText = role;
  companyContact.classList.add('d-none');
  const { skills } = data; // SkillsContainer
  if (Array.isArray(skills) && skills.length > 0) {
    skills.forEach((item) => {
      const renderSkill = document.createElement('li');
      renderSkill.classList.add('fw-bolder', 'fs-6', 'ms-0');
      renderSkill.innerText = item.trim();

      skillsList.append(renderSkill);
    });
  }
  descriptionHeader.innerText = 'About me'; // Description Header
  const description = data.about; // Description
  profileDescription.textContent = description;

  // listings section
}
