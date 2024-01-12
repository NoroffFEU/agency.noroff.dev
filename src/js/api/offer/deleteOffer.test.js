import { deleteOffer } from './deleteOffer';

global.fetch = jest.fn();

describe('deleteOffer', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should confirm deletion when successful', async () => {
    const mockOfferId = 123;
    fetch.mockResolvedValueOnce({
      ok: true,
    });

    const result = await deleteOffer(mockOfferId);

    expect(result).toBe('Offer deleted successfully');
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(mockOfferId.toString()),
      expect.objectContaining({
        method: 'DELETE',
        headers: expect.anything(),
      })
    );
  });

  it('should throw an error if no offer ID is provided', async () => {
    await expect(deleteOffer()).rejects.toThrow('Deleting an offer requires an offer ID');
  });

  it('should throw an error on API failure', async () => {
    const mockOfferId = 123;
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(deleteOffer(mockOfferId)).rejects.toThrow('Error deleting offer: Not Found');
  });
});
