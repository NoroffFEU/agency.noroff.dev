import { getSingleListing } from './getSingleListing.js';
import { apiBaseFetch } from '../apiBaseFetch.js';

jest.mock('../apiBaseFetch.js');

describe('getSingleListing', () => {
  it('should return listing data on successful fetch', async () => {
    const mockListingId = '123';
    const mockApiResponse = { id: mockListingId, name: 'Test Listing', description: 'Description' };

    apiBaseFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const result = await getSingleListing(mockListingId);

    expect(result).toEqual(mockApiResponse);
    expect(apiBaseFetch).toHaveBeenCalledWith(expect.stringContaining(mockListingId));
  });

  it('should throw an error if the listing ID is not provided', async () => {
    await expect(getSingleListing()).rejects.toThrow('Get requires a listing ID');
  });

  it('should throw an error on API failure', async () => {
    const mockListingId = '123';
    apiBaseFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(getSingleListing(mockListingId)).rejects.toThrow(
      'Error retrieving listing: Not Found'
    );
  });
});
