import { applicantProfile } from './applicantProfile.js';
import { clientProfile } from './clientProfile';

const editProfileBtn = document.querySelector('#editProfileBtn');

/**
 * @description Renders content on profile page based on user role
 * @param {object} data object data on user
 */
export function createProfileContent(data) {
  const firstName = data.firstName;
  const lastName = data.lastName;
  const userRole = data.role;
  const skills = data.skills;
  const about = data.about;

  document.getElementById('firstNameStudent').value = firstName;
  document.getElementById('lastNameStudent').value = lastName;
  document.getElementById('studentDescription').value = about;
  document.getElementById('studentSkills').value = skills;


  if (userRole === 'Client') {
    clientProfile(data);
  }
  // // If there is an Admin user at some point needing a profile page, this could be setup here
  // else if (userRole === 'Admin'){
  //   adminProfile(data);
  // }
  else if (userRole === 'Applicant') {
    applicantProfile(data);
  }
  else {
    editProfileBtn.classList.add('d-none');
  }
}
