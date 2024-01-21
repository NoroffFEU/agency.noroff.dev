import { apiUrl, companyUrl } from '../constants.js';
import { registerCompany } from './registerCompany.js';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('registerCompany', () => {
  it('sends correct request to register a company', async () => {
    const mockToken = 'test-token';
    const mockData = {
      name: 'Test Company',
      email: 'test@example.com',
      password: 'password123',
      contactPerson: 'John Doe',
      contactNumber: '1234567890',
      registerToken: mockToken,
    };

    const expectedResponse = { message: 'Registration successful' };

    fetch.mockResponseOnce(JSON.stringify(expectedResponse));

    const response = await registerCompany(mockData);

    expect(fetch).toHaveBeenCalledWith(`${apiUrl}${companyUrl}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mockToken}`,
      },
      method: 'POST',
      body: JSON.stringify(mockData),
    });
    expect(response).toEqual(expectedResponse);
  });

  it('throws an error when the API returns an error status', async () => {
    const mockToken = 'test-token';
    const mockData = {
      name: 'Test Company',
      email: 'test@example.com',
      password: 'password123',
      contactPerson: 'John Doe',
      contactNumber: '1234567890',
      registerToken: mockToken,
    };

    const errorMessage = { message: 'Error registering company' };

    fetch.mockReject(new Error(JSON.stringify(errorMessage)));

    await expect(registerCompany(mockData)).rejects.toThrow('Error registering company');
  });
});
