import { addDegreeInput } from './addDegreeHandler.js';
import { handleAvatarInput } from './handleAvatarInput.js';
import { handleEditForms } from './handleEditForm.js';
import { modalToggle } from './modalToggle.js';

export function profileRouter() {
  addDegreeInput();
  handleAvatarInput();
  modalToggle();
  handleEditForms();
}
