// Author: Åke Ek
// comment: There is an issue with the response, wich is why I added a "1" in the filename. Remove the 1 and run the test to see the response.

import { getListOfListings } from './getListOfListings';

function mockGetList() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(TEST_ITEM),
  });
}

function mockFailGetListing() {
  return Promise.resolve({
    ok: false,
    statusText: 'Bad request',
  });
}

describe('getListOfListings', () => {
  it('Displays a list of listings from the API', async () => {
    global.fetch = jest.fn(() => mockGetList());
    const list = await getListOfListings();
    expect(list).toBeInstanceOf(Array);
    expect(list[0]).toHaveProperty('title');
    expect(list[0]).toHaveProperty('location');
    expect(list[0]).toHaveProperty('deadline');
  });

  it('Fails to display from the API', async () => {
    global.fetch = jest.fn(() => mockFailGetListing());
    await expect(getListOfListings).rejects.toThrow('Get requires a listingID');
  });
});
