import { addDegreeInput } from './addDegreeHandler.js';
import { handleAvatarInput } from './handleAvatarInput.js';
import { handleEditForms } from './handleEditForm.js';
import { modalToggle } from './modalToggle.js';
import { showUserDetails } from './showUserDetails.js';
import { handleModalData } from './handleModalData.js';
import { toggleShowFavListings} from './toggleShowFavListings.js';
//import { showUserListings } from './showUserListings.js';

export function profileRouter() {
  addDegreeInput();
  handleAvatarInput();
  modalToggle();
  handleEditForms();
  showUserDetails();
  handleModalData();
  toggleShowFavListings();
  //showUserListings();
}
