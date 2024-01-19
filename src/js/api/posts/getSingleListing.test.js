import { getSingleListing } from './getSingleListing.js';
import { authBaseFetchOpen } from '../apiBaseFetch.js';

jest.mock('../apiBaseFetch.js');

describe('getSingleListing', () => {
  it('should return listing data on successful fetch', async () => {
    const mockListingId = '123';
    const mockApiResponse = { id: mockListingId, name: 'Test Listing', description: 'Description' };

    authBaseFetchOpen.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const result = await getSingleListing(mockListingId);

    expect(result).toEqual(mockApiResponse);
    expect(authBaseFetchOpen).toHaveBeenCalledWith(expect.stringContaining(mockListingId));
  });

  it('should throw an error if the listing ID is not provided', async () => {
    await expect(getSingleListing()).rejects.toThrow('Get requires a listing ID');
  });

  it('should throw an error on API failure', async () => {
    const mockListingId = '123';
    authBaseFetchOpen.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(getSingleListing(mockListingId)).rejects.toThrow(
      'Error retrieving listing: Not Found'
    );
  });
});
