import { editSingleListing } from './editSingleListing'; // Adjust the path as necessary
import { apiBaseFetch } from '../apiBaseFetch.js';

jest.mock('../apiBaseFetch.js');

describe('editSingleListing', () => {
  beforeEach(() => {
    apiBaseFetch.mockClear();
  });

  it('should return updated data on successful edit', async () => {
    const mockListingId = '123';
    const mockUpdatedData = { name: 'Updated Listing', description: 'Updated Description' };
    const mockApiResponse = { ...mockUpdatedData, id: mockListingId };

    apiBaseFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const result = await editSingleListing(mockListingId, mockUpdatedData);

    expect(result).toEqual(mockApiResponse);
    expect(apiBaseFetch).toHaveBeenCalledWith(
      expect.stringContaining(mockListingId),
      expect.objectContaining({
        method: 'PUT',
        headers: expect.anything(),
        body: JSON.stringify(mockUpdatedData),
      })
    );
  });

  it('should throw an error if the listing ID is not provided', async () => {
    const mockUpdatedData = { name: 'Updated Listing', description: 'Updated Description' };

    await expect(editSingleListing(undefined, mockUpdatedData)).rejects.toThrow(
      'Edit requires a listing ID'
    );
  });

  it('should throw an error on API failure', async () => {
    const mockListingId = '123';
    const mockUpdatedData = { name: 'Updated Listing', description: 'Updated Description' };

    apiBaseFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(editSingleListing(mockListingId, mockUpdatedData)).rejects.toThrow(
      'Error editing listing: Not Found'
    );
  });
});
