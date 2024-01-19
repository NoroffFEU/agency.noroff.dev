import { deleteSingleListing } from './deleteSingleListing'; // Adjust the path as necessary
import { apiBaseFetch } from '../apiBaseFetch.js';

jest.mock('../apiBaseFetch.js');

describe('deleteSingleListing', () => {
  beforeEach(() => {
    apiBaseFetch.mockClear();
  });

  it('should return a successful response on successful deletion', async () => {
    const mockListingId = '123';

    apiBaseFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Listing deleted successfully' }),
    });

    const result = await deleteSingleListing(mockListingId);

    expect(result).toEqual({ message: 'Listing deleted successfully' });
    expect(apiBaseFetch).toHaveBeenCalledWith(
      expect.stringContaining(mockListingId),
      expect.objectContaining({
        method: 'DELETE',
        headers: expect.anything(),
      })
    );
  });

  it('should throw an error if the listing ID is not provided', async () => {
    await expect(deleteSingleListing()).rejects.toThrow('Delete requires a listing ID');
  });

  it('should throw an error on API failure', async () => {
    const mockListingId = '123';
    apiBaseFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(deleteSingleListing(mockListingId)).rejects.toThrow(
      'Error deleting listing: Not Found'
    );
  });
});
