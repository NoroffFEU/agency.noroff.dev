import { deleteApplication } from './deleteApplication';

global.fetch = jest.fn();

describe('deleteApplication', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should return "Deleted!" when deletion is successful', async () => {
    const mockApplicationId = '123';

    fetch.mockResolvedValueOnce({
      ok: true,
    });

    const result = await deleteApplication(mockApplicationId);

    expect(result).toBe('Deleted!');
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(mockApplicationId),
      expect.objectContaining({
        method: 'DELETE',
        headers: expect.anything(),
      })
    );
  });

  it('should throw an error if the application ID is not provided', async () => {
    await expect(deleteApplication()).rejects.toThrow('Missing application ID');
  });

  it('should throw an error on API failure', async () => {
    const mockApplicationId = '123';
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(deleteApplication(mockApplicationId)).rejects.toThrow(
      'Failed to delete application: Not Found'
    );
  });
});
