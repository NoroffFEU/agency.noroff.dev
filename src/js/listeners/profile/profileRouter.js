import { addDegreeInput } from './addDegreeHandler.js';
import { handleAvatarInput } from './handleAvatarInput.js';
import { handleEditForms } from './handleEditForm.js';
import { modalToggle } from './modalToggle.js';
import { showUserDetails } from './showUserDetails.js';
import { handleModalData } from './handleModalData.js';
import { toggleShowFavListings } from './toggleShowFavListings.js';
//import { showUserListings } from './showUserListings.js';

export function profileRouter() {
  // Redirects unregister user when accessing /pages/user/
  const role = localStorage.getItem('role')?.replace(/^"|"$/g, '').trim().toLowerCase();
  console.log('role', role);
  if (!role) {
    window.location.href = '../auth/register/applicant/';
  } else {
    addDegreeInput();
    handleAvatarInput();
    modalToggle();
    handleEditForms();
    showUserDetails();
    handleModalData();
    toggleShowFavListings();
    //showUserListings();
  }
}
