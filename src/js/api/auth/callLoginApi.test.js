import { callLoginApi } from './callLoginApi';

global.fetch = jest.fn();

describe('callLoginApi', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('returns userData on successful login', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        avatar: 'avatarUrl',
        email: 'user@example.com',
        firstName: 'John',
        id: '1',
        lastName: 'Doe',
        role: 'Applicant',
        token: 'token123',
      }),
    });

    const result = await callLoginApi('user@example.com', 'password123');
    expect(result).toEqual({
      userData: {
        avatar: 'avatarUrl',
        email: 'user@example.com',
        firstName: 'John',
        id: '1',
        lastName: 'Doe',
        role: 'Applicant',
        token: 'token123',
      },
      error: null,
    });
  });

  it('returns error on failed login', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        error: 'Invalid credentials',
      }),
    });

    const result = await callLoginApi('user@example.com', 'wrongPassword');
    expect(result).toEqual({
      userData: null,
      error: {
        error: 'Invalid credentials',
      },
    });
  });
});
