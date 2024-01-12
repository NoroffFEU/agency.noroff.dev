import { create } from './create.js';
import { apiBaseFetch } from '../apiBaseFetch.js';

jest.mock('../apiBaseFetch.js');

describe('create', () => {
  it('should return data on successful application creation', async () => {
    const mockAppData = { name: 'New Application', description: 'Test Description' };
    const mockApiResponse = { id: '123', ...mockAppData };

    apiBaseFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
      statusText: 'OK',
    });

    const result = await create(mockAppData);

    expect(result).toEqual(mockApiResponse);
    expect(apiBaseFetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mockAppData),
    });
  });

  it('should throw an error on API failure', async () => {
    apiBaseFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Internal Server Error',
    });

    const mockAppData = { name: 'New Application', description: 'Test Description' };

    await expect(create(mockAppData)).rejects.toThrow(
      'Error creating application: Internal Server Error'
    );
  });
});
