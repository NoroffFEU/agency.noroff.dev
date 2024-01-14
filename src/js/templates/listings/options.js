// Author: May-Tove Hovdal
import { deleteListing } from './optionEvents.js';

export function options() {
  const cardBody = document.querySelector('.card-body');

  // Container for edit and delete button
  const options = document.createElement('div');
  options.className = 'd-flex gap-2';

  // Edit button
  const editBtn = document.createElement('a');
  editBtn.className = 'btn btn-theme-secondary text-uppercase rounded-0';
  editBtn.dataset.auth = 'editSingleListing';
  editBtn.href = '/pages/listings/listing/editListing.html';
  editBtn.id = 'editListingBtn';
  editBtn.innerText = 'Edit';

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-theme-dark text-uppercase rounded-0';
  deleteBtn.dataset.auth = 'deleteListing';
  deleteBtn.id = 'deleteListingBtn';
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', deleteListing);

  options.append(editBtn, deleteBtn);
  cardBody.append(options);
}
