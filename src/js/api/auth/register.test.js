import { registerUser } from './register';

global.fetch = jest.fn();

describe('registerUser', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should return data on successful registration', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: '123',
        username: 'testuser',
        email: 'test@example.com',
      }),
    });

    const profile = { username: 'testuser', email: 'test@example.com', password: 'password123' };
    const result = await registerUser(profile);

    expect(result).toEqual({
      data: {
        id: '123',
        username: 'testuser',
        email: 'test@example.com',
      },
      error: null,
    });
  });

  it('should return error message on failed registration', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        message: 'Registration failed',
      }),
    });

    const profile = { username: 'testuser', email: 'test@example.com', password: 'password123' };
    const result = await registerUser(profile);

    expect(result).toEqual({
      data: null,
      error: 'Registration failed',
    });
  });

  it('should handle unexpected response format', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    const profile = { username: 'testuser', email: 'test@example.com', password: 'password123' };
    const result = await registerUser(profile);

    expect(result).toEqual({
      data: null,
      error: 'There was an error processing the request.',
    });
  });
});
