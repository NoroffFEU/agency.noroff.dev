import { applicantProfile } from './applicantProfile.js';
import { clientProfile } from './clientProfile';

/**
 * @description Renders content on profile page based on user role
 * @param {object} data object data on user
 */
export function createProfileContent(data) {
  console.log(data);
  
  const userRole = data.role;

  if (userRole === 'Client') {
    clientProfile(data);
  }
  // // If there is an Admin user at some point needing a profile page, this could be setup here
  // else if (userRole === 'Admin'){
  //   adminProfile(data);
  // }
  else {
    applicantProfile(data);
  }
}
