import { createOffer } from './createOffer'; // Adjust the path as necessary

global.fetch = jest.fn();

describe('createOffer', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should return data on successful offer creation', async () => {
    const mockPostData = { title: 'New Offer', details: 'Offer Details' };
    const mockApiResponse = { id: '123', ...mockPostData };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
      statusText: 'OK',
    });

    const result = await createOffer(mockPostData);

    expect(result).toEqual(mockApiResponse);
    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'POST',
      headers: expect.anything(),
      body: JSON.stringify(mockPostData),
    });
  });

  it('should throw an error on API failure', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Internal Server Error',
    });

    const mockPostData = { title: 'New Offer', details: 'Offer Details' };

    await expect(createOffer(mockPostData)).rejects.toThrow(
      'Error creating offer: Internal Server Error'
    );
  });
});
