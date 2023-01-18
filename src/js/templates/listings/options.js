// Author: May-Tove Hovdal
import { deleteListing, editListing } from './optionEvents.js';

export function options() {
  /*const buttonContainer = document.querySelector('.buttonContainer');*/
  const cardBody = document.querySelector('.card-body');

  // Container for edit and delete button
  const options = document.createElement('div');
  options.className = 'd-flex gap-2';

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-theme-secondary text-uppercase rounded-0';
  editBtn.id = 'editListingBtn';
  editBtn.innerText = 'Edit';
  editBtn.addEventListener('click', editListing);

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-theme-dark text-uppercase rounded-0';
  deleteBtn.id = 'deleteListingBtn';
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', deleteListing);

  options.append(editBtn, deleteBtn);
  cardBody.append(options);

  /*buttonContainer.classList.add('d-none');*/
}
