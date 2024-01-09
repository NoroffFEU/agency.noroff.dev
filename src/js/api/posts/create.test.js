import { create } from './create';
import { apiBaseFetch } from '../apiBaseFetch';
import { dummyApiCreatePost, dummyApiUrl } from '../constants';

jest.mock('../apiBaseFetch');

const appData = { title: 'New Application', details: 'Some details' };
const mockResponse = { id: 1, ...appData };

describe('create', () => {
  it('successfully creates a new application', async () => {
    apiBaseFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await create(appData);
    expect(apiBaseFetch).toHaveBeenCalledWith(dummyApiUrl + dummyApiCreatePost, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appData),
    });
    expect(result).toEqual(mockResponse);
  });

  it('handles failure when creating a new application', async () => {
    apiBaseFetch.mockResolvedValue({ ok: false });

    const result = await create(appData);
    expect(apiBaseFetch).toHaveBeenCalledWith(dummyApiUrl + dummyApiCreatePost, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appData),
    });
    expect(result).toBeUndefined();
  });
});
