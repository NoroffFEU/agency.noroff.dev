import { deleteUser } from './deleteUser';

const mockResponse = { message: 'User deleted' };

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResponse),
  })
);

describe('deleteUser', () => {
  it('throws an error if no user ID is provided', async () => {
    await deleteUser().catch((err) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err.message).toBe('Delete user requires a user ID');
    });
  });

  it('returns a response if successful', async () => {
    const response = await deleteUser(1);
    expect(response).toEqual(mockResponse);
  });

  it('throws an error if unsuccessful', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Not found',
      })
    );

    await deleteUser(1).catch((err) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err.message).toBe('Error deleting user: Not found');
    });
  });
});
