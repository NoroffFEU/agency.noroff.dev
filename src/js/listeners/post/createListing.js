import { create } from '../../api/posts/create.js';
import {
  validateCompanyId,
  validateJobTitle,
  validateTags,
  validateRequirements,
  validateFutureDate,
  validateDescription,
} from '../../utilities/formvalidation/listingValidation.js';

/**
 * function that creates a Listing, the function creates a modal where companies can add different information like Title, tags, requirements, deadline,
 * description the function also validates the input, the input is used to create an object called appData which is sent to the api, if the listing is successfully created
 * the user will receive a success message, if an error occurs the user will receive an error message
 */
export function createListing() {
  const form = document.querySelector('#createNewListing');
  const companySelect = document.querySelector('#companySelect');

  //Re-written because as it stands there will always be one ID in local storage, so no need for forEach
  //This company field does not need to be a dropdown/selection as well
  //This function will display the same result for an Applicant as before
  //However it displays correct company name if the user is a Client
  function populateCompanyDropdown() {
    const role = JSON.parse(localStorage.getItem('role'));

    if (role === 'Client') {
      const companyData = localStorage.getItem('companyName');
      const option = document.createElement('option');
      option.value = companyData;
      option.textContent = companyData;
      companySelect.appendChild(option);
    } else {
      const applicantId = localStorage.getItem('id');
      const option = document.createElement('option');
      option.value = applicantId;
      option.textContent = applicantId;
      companySelect.appendChild(option);
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
      createTags.setCustomValidity(
        'Tags should be separated by commas and contain dashes instead of spaces. IE "IT-worker, html, javascript, css"'
      );
    }
  });

  createRequirements.addEventListener('input', () => {
    if (validateRequirements(createRequirements.value)) {
      createRequirements.setCustomValidity('');
    } else {
      createRequirements.setCustomValidity(
        'Requirements should be separated by commas and contain dashes instead of spaces. IE "IT-worker, html, javascript, css"'
      );
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
      company: localStorage.getItem('companyId'),
      title: createTitle.value,
      tags: createTags.value.split(',').map((tag) => tag.trim()),
      requirements: createRequirements.value.split(',').map((req) => req.trim()),
      deadline: createDeadline.value,
      description: createDescription.value,
    };

    try {
      await create(appData);

      const successModal = document.querySelector('#listing-success-modal');

      if (successModal) {
        successModal.style.display = 'flex';
        successModal.showModal();

        const closeModal = () => {
          successModal.close();
          successModal.style.display = 'none';
        };

        successModal.addEventListener('click', closeModal);

        setTimeout(() => {
          closeModal();

          const parentModal = document.querySelector('#newListingsModal');
          const bootstrapModal = bootstrap.Modal.getInstance(parentModal);
          if (bootstrapModal) {
            bootstrapModal.hide();
          }
        }, 1500);
      }
    } catch (error) {
      const errorModal = document.querySelector('#error-modal');
      const errorMessageElement = document.querySelector('#error-message');

      if (errorModal) {
        errorMessageElement.textContent = `Error: ${error.message}`;

        errorModal.style.display = 'flex';
        errorModal.showModal();

        const closeModal = () => {
          errorModal.close();
          errorModal.style.display = 'none';
        };

        errorModal.addEventListener('click', closeModal);

        setTimeout(() => {
          closeModal();
        }, 3000);
      }
    }
  });
}
