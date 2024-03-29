global.fetch = jest.fn();
import { editSingleListing } from './editSingleListing';

jest.mock('../getToken.js', () => ({
  getToken: jest.fn().mockReturnValue('mocked-token'),
}));

document.getElementById = jest.fn().mockImplementation((id) => {
  if (id === 'hide-edit-modal') {
    return { click: jest.fn() };
  }
  return null;
});

window.bootstrap = { Modal: jest.fn().mockImplementation(() => ({ show: jest.fn() })) };

describe('editSingleListing', () => {
  beforeEach(() => {
    fetch.mockClear();
    document.getElementById.mockClear();
    window.bootstrap.Modal.mockClear();
  });

  it('should return updated data on successful edit', async () => {
    const mockListingId = '123';
    const mockUpdatedData = { name: 'Updated Listing', description: 'Updated Description' };
    const mockApiResponse = { ...mockUpdatedData, id: mockListingId };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const result = await editSingleListing(mockListingId, mockUpdatedData);

    expect(document.getElementById).toHaveBeenCalledWith('hide-edit-modal');
    expect(window.bootstrap.Modal).toHaveBeenCalled();
    expect(result).toEqual(mockApiResponse);
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
    const mockError = { message: 'Not Found' };

    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => mockError,
    });

    await expect(editSingleListing(mockListingId, mockUpdatedData)).rejects.toThrow(
      'Error editing listing: Not Found'
    );
  });
});
