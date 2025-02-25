// Author: Åke Ek
// Comment: There is an issue with the response, which is why I added a "1" in the filename.
// Remove the 1 and run the test to see the response.

// Author: Ephraim Djeket - MAR22PT
// Changed mock API response to match realistic values
// Updated API error handling to return error message and code instead of rejecting.
// Improved getListOfListings() function to verify if the API request returns a list of listings or if it fails with an error.
//Improved the test suite behaviour of getListOfListings function in relation to spinner show/hide

import { getListOfListings } from './getListOfListings.js';
import { showSpinner, hideSpinner } from '../../utilities/listings/loadingIndicator.js';

jest.mock('../../utilities/listings/loadingIndicator.js', () => ({
  showSpinner: jest.fn(),
  hideSpinner: jest.fn(),
}));


global.fetch = jest.fn();

const TEST_ITEM = [
  {
    title: 'Title',
    location: 'Location',
    deadline: '2025-12-31T23:59:59Z',
  },
];

function mockGetList() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(TEST_ITEM),
  });
}

function mockFailGetListing() {
  return Promise.resolve({
    ok: false,
    status: 500,
    statusText: 'Internal Server Error',
    json: () => Promise.resolve({ message: 'Something went wrong' }),
  });
}

describe('getListOfListings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a valid list of listings from the API', async () => {
    global.fetch.mockImplementationOnce(() => mockGetList());

    const list = await getListOfListings();
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThan(0);


    expect(list[0]?.title).toBeDefined();
    expect(list[0]?.location).toBeDefined();
    expect(list[0]?.deadline).toBeDefined();
  });

  it('should throw an error if API request fails', async () => {
    global.fetch.mockImplementationOnce(() => mockFailGetListing());

    await expect(getListOfListings()).rejects.toThrow(/500 Internal Server Error/);
  });

  describe('getListOfListings with spinner actions', () => {
    it('calls showSpinner and hideSpinner when fetching listings', async () => {
      global.fetch.mockImplementationOnce(() => mockGetList());

      await getListOfListings();

      expect(showSpinner).toHaveBeenCalledTimes(1);
      expect(hideSpinner).toHaveBeenCalledTimes(1);
    });

    it('calls showSpinner and hideSpinner even if fetching fails', async () => {
      global.fetch.mockImplementationOnce(() => mockFailGetListing());

      await expect(getListOfListings()).rejects.toThrow(/500 Internal Server Error/);

      expect(showSpinner).toHaveBeenCalledTimes(1);
      expect(hideSpinner).toHaveBeenCalledTimes(1);
    });
  });
});
