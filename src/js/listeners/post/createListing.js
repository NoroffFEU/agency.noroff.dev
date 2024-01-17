import { create } from '../../api/posts/create.js';
import {
  validateCompanyId,
  validateJobTitle,
  validateTags,
  validateRequirements,
  validateFutureDate,
  validateDescription,
} from '../../utilities/formvalidation/listingValidation.js';

export function createListing() {
  const form = document.querySelector('#createNewListing');
  const modalBody = document.querySelector('.modal-body');
  const companySelect = document.querySelector('#companySelect');
  const createModal = new bootstrap.Modal(document.getElementById('createModal'));

  function populateCompanyDropdown() {
    const companyData = localStorage.getItem('companyIDs');
    if (companyData) {
      const companies = JSON.parse(companyData); // Replace with the actual local storage key
      companies.forEach((companyId) => {
        const option = document.createElement('option');
        option.value = companyId;
        option.textContent = companyId;
        companySelect.appendChild(option);
      });
    } else { //Disables field if no company ID is present in localstorage
      const defaultOption = document.createElement('option'); 
      defaultOption.textContent = 'No companies available';
      defaultOption.disabled = true;
      companySelect.appendChild(defaultOption);
      companySelect.disabled = true;
    }
  }

  populateCompanyDropdown();

  const createTitle = document.querySelector('#createTitle');
  const createTags = document.querySelector('#createTags');
  const createRequirements = document.querySelector('#createRequirements');
  const createDeadline = document.querySelector('#createDeadline');
  const createDescription = document.querySelector('#createDescription');

  companySelect.addEventListener('change', () => {
    if (validateCompanyId(companySelect.value)) {
      companySelect.setCustomValidity('');
    } else {
      companySelect.setCustomValidity('Please select a company.');
    }
  });

  createTitle.addEventListener('input', () => {
    if (validateJobTitle(createTitle.value)) {
      createTitle.setCustomValidity('');
    } else {
      createTitle.setCustomValidity('Title should be between 5 and 50 characters');
    }
  });

  createTags.addEventListener('input', () => {
    if (validateTags(createTags.value)) {
      createTags.setCustomValidity('');
    } else {
      createTags.setCustomValidity('Tags should be separated by commas and contain dashes instead of spaces. IE "IT-worker, html, javascript, css"');
    }
  });

  createRequirements.addEventListener('input', () => {
    if (validateRequirements(createRequirements.value)) {
      createRequirements.setCustomValidity('');
    } else {
      createRequirements.setCustomValidity('Requirements should be separated by commas and contain dashes instead of spaces. IE "IT-worker, html, javascript, css"');
    }
  });

  createDeadline.addEventListener('change', () => {
    if (validateFutureDate(createDeadline.value)) {
      createDeadline.setCustomValidity('');
    } else {
      createDeadline.setCustomValidity('Deadline must be a future date');
    }
  });

  createDescription.addEventListener('input', () => {
    if (validateDescription(createDescription.value)) {
      createDescription.setCustomValidity('');
    } else {
      createDescription.setCustomValidity('Description must be at least 10 characters long.');
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    companySelect.setCustomValidity('');
    createTitle.setCustomValidity('');
    createTags.setCustomValidity('');
    createRequirements.setCustomValidity('');
    createDeadline.setCustomValidity('');
    createDescription.setCustomValidity('');

    if (!validateCompanyId(companySelect.value)) {
      companySelect.setCustomValidity('Please select a company.');
    }

    if (!form.reportValidity()) {
      return;
    }

    const appData = {
      company: companySelect.value,
      title: createTitle.value,
      tags: createTags.value.split(',').map((tag) => tag.trim()),
      requirements: createRequirements.value.split(',').map((req) => req.trim()),
      deadline: createDeadline.value,
      description: createDescription.value,
    };

    try {
      await create(appData);

      modalBody.innerHTML = '';
      const successIcon = document.createElement('img');
      successIcon.src = '/assets/icons/checkmark.svg';
      successIcon.alt = 'Success';

      const successMessage = document.createElement('h3');
      successMessage.textContent = 'Listing created successfully!';

      modalBody.appendChild(successIcon);
      modalBody.appendChild(successMessage);

      createModal.show();
    } catch (error) {
      modalBody.innerHTML = '';
      const errorIcon = document.createElement('img');
      errorIcon.src = '/assets/icons/cancel.svg';
      errorIcon.alt = 'Error';

      const errorMessage = document.createElement('h3');
      errorMessage.textContent = `Error: ${error.message}`;

      modalBody.appendChild(errorIcon);
      modalBody.appendChild(errorMessage);

      createModal.show();
    }
  });
}
