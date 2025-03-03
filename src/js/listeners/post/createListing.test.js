import { createListing } from './createListing.js';
import { create } from '../../api/posts/create.js';

jest.mock('../../api/posts/create.js', () => ({
  create: jest.fn(),
}));

jest.mock('../../utilities/formvalidation/listingValidation.js', () => ({
  validateCompanyId: jest.fn(() => true),
  validateJobTitle: jest.fn(() => true),
  validateTags: jest.fn(() => true),
  validateRequirements: jest.fn(() => true),
  validateFutureDate: jest.fn(() => true),
  validateDescription: jest.fn(() => true),
}));

describe('createListing', () => {
  let form,
    companySelect,
    createTitle,
    createTags,
    createRequirements,
    createDeadline,
    createDescription;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="createNewListing">
        <select id="companySelect"></select>
        <input id="createTitle" type="text">
        <input id="createTags" type="text">
        <input id="createRequirements" type="text">
        <input id="createDeadline" type="date">
        <textarea id="createDescription"></textarea>
        <button type="submit">Submit</button>
      </form>
      <dialog id="listing-success-modal"></dialog>
      <dialog id="error-modal">
        <p id="error-message"></p>
      </dialog>
    `;

    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();

    localStorage.setItem('role', JSON.stringify('Client'));
    localStorage.setItem('companyName', 'TestCompany');
    localStorage.setItem('companyId', '123');

    form = document.querySelector('#createNewListing');
    companySelect = document.querySelector('#companySelect');
    createTitle = document.querySelector('#createTitle');
    createTags = document.querySelector('#createTags');
    createRequirements = document.querySelector('#createRequirements');
    createDeadline = document.querySelector('#createDeadline');
    createDescription = document.querySelector('#createDescription');

    createListing();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should populate the company dropdown based on user role', () => {
    expect(companySelect.children.length).toBe(1);
    expect(companySelect.children[0].value).toBe('TestCompany');
  });

  it('should validate and submit the form successfully', async () => {
    createTitle.value = 'Valid Title';
    createTags.value = 'tag1,tag2';
    createRequirements.value = 'requirement1,requirement2';
    createDeadline.value = '2099-12-31';
    createDescription.value = 'Valid description';

    const submitEvent = new Event('submit');
    form.dispatchEvent(submitEvent);

    expect(create).toHaveBeenCalledWith({
      company: '123',
      title: 'Valid Title',
      tags: ['tag1', 'tag2'],
      requirements: ['requirement1', 'requirement2'],
      deadline: '2099-12-31',
      description: 'Valid description',
    });
  });

  it('should show error modal if API call fails', async () => {
    create.mockRejectedValue(new Error('Network error'));

    createTitle.value = 'Valid Title';
    createTags.value = 'tag1,tag2';
    createRequirements.value = 'requirement1,requirement2';
    createDeadline.value = '2099-12-31';
    createDescription.value = 'Valid description';

    const submitEvent = new Event('submit');
    form.dispatchEvent(submitEvent);

    await new Promise(process.nextTick);

    const errorModal = document.querySelector('#error-modal');
    const errorMessage = document.querySelector('#error-message');

    expect(errorMessage.textContent).toBe('Error: Network error');
    expect(errorModal.style.display).toBe('flex');
  });
});
