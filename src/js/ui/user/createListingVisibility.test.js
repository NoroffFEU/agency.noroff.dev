import { newListingOption } from './createListingVisibility.js';

describe('newListingOption', () => {
  let newListing;

  beforeEach(() => {
    newListing = document.createElement('div');
    newListing.className = 'toggle-create-listing';
    document.body.appendChild(newListing);

    jest.spyOn(Storage.prototype, 'getItem');
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.restoreAllMocks();
  });

  test('shows newListing when role is "Client" in localStorage', () => {
    localStorage.getItem.mockReturnValue('"Client"');
    newListing.classList.add('d-none');

    newListingOption();

    expect(newListing.classList.contains('d-block')).toBe(true);
    expect(newListing.classList.contains('d-none')).toBe(false);
  });

  test('hides newListing when role is "Applicant" in localStorage', () => {
    localStorage.getItem.mockReturnValue('"Applicant"');
    newListing.classList.add('d-block');

    newListingOption();

    expect(newListing.classList.contains('d-none')).toBe(true);
    expect(newListing.classList.contains('d-block')).toBe(false);
  });
});
