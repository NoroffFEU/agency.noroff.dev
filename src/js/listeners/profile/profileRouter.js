import { addDegreeInput } from './addDegreeHandler.js';
import { handleAvatarInput } from './handleAvatarInput.js';
import { handleEditForms } from './handleEditForm.js';
import { modalToggle } from './modalToggle.js';
import { showUserDatails } from './showUserDetails.js';
//import { showUserListings } from './showUserListings.js';

export function profileRouter() {
  addDegreeInput();
  handleAvatarInput();
  modalToggle();
  handleEditForms();
  showUserDatails();
  //showUserListings();
}
