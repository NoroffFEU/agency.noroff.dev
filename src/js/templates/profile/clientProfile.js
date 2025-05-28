const profileImage = document.querySelector('#profileImage');
const companyName = document.querySelector('#profileName');
const companyRole = document.querySelector('#profileRole');
const companySector = document.querySelector('#profileContact');
const companyEmail = document.querySelector('#profileEmail');
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
  //console.log(data)
  companyName.innerText = data.firstName; // Company Name
  companyRole.innerText = data.role; // Company Role
  profileImage.src =
    data.company.logo || 'https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg';
  profileImage.alt = (companyName.innerText || 'Unknown') + ' logo';
  companySector.innerText = data.company.sector;
  companyEmail.innerText = data.email;

  skillContainer.classList.add('d-none'); // SkillsContainer
  descriptionHeader.innerText = 'About us'; // Description Header
  profileDescription.textContent = `The "description/about" property does not exists on the company Object at this time. 
  The client cant add anything to it. Therefore this text you see is hardcoded until that is fixed`;

  editUserForm.classList.remove('d-none');

  // Company applications

  // The profile view will have a container component that will display the applications of the company.
  // That code goes here

  // listings section
  // The profile view will have a container component that will display the listings of the company.
  // That code goes here
}
