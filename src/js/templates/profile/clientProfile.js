const profileImage = document.querySelector('#profileImage');
const userName = document.querySelector('#profileName');
const companyContact = document.querySelector('#profileContact');
const skillContainer = document.querySelector('#skillsContainer');
const descriptionHeader = document.querySelector('#descriptionHeader');
const profileDescription = document.querySelector('#descriptionBody');
const editUserForm = document.querySelector('#editCompanyProfile');
// const applicationsContainer = document.querySelector('#companyApplicationsContainer');

/**
 * @description Renders content on Client profile page
 * @param {object} data object data on user
 */
export function clientProfile(data) {
  console.log(data)
  // Profile section
  const name = data.company.name; // Avatar / logo
  profileImage.src =
    data.company.logo || 'https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg';
  profileImage.alt = (name || 'Unknown') + ' logo';
  const companyName = data.company.name; // Company Name
  userName.innerText = companyName;
  const { firstName, lastName } = data; // Company contact person
  companyContact.innerText = firstName + ' ' + lastName;
  skillContainer.classList.add('d-none'); // SkillsContainer
  descriptionHeader.innerText = 'About us'; // Description Header
  const description = data.about; // Description
  profileDescription.textContent = description;

  editUserForm.classList.remove('d-none');
  // Company applications

  // Favorite listings section
}
