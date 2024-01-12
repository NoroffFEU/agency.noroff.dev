import { login } from './login.js';
import { Store } from '../../storage/storage.js';
import { message } from '../../utilities/message/message.js';
import { callLoginApi } from './callLoginApi.js';

jest.mock('../../storage/storage.js');
jest.mock('../../utilities/message/message.js');
jest.mock('./callLoginApi.js');

describe('login', () => {
  const originalLocation = window.location;
  delete window.location;
  window.location = { replace: jest.fn() };

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
    jest.clearAllMocks();
  });

  afterAll(() => {
    window.location = originalLocation;
  });

  it('should store user data and redirect on successful login', async () => {
    callLoginApi.mockResolvedValue({
      userData: { token: 'token123', role: 'Applicant', id: '1', email: 'user@example.com' },
      error: null,
    });
    Store.prototype.save = jest.fn();
    Store.prototype.clear = jest.fn();

    const profile = { email: 'user@example.com', password: 'password123', remember: 'on' };
    await login(profile);

    expect(Store.prototype.save).toHaveBeenCalledTimes(4);
    expect(window.location.replace).toHaveBeenCalledWith('/pages/user/index.html');
  });

  it('should show error message on invalid credentials', async () => {
    callLoginApi.mockResolvedValue({ userData: null, error: 'Invalid credentials' });

    const profile = { email: 'user@example.com', password: 'wrongpassword' };
    await login(profile);

    expect(message).toHaveBeenCalledWith(
      'danger',
      'Invalid login credentials. Please try again',
      '#errorContainer'
    );
    expect(Store.prototype.save).not.toHaveBeenCalled();
  });

  it('should handle unknown errors', async () => {
    const testError = new Error('Network error');
    callLoginApi.mockRejectedValue(testError);
    const profile = { email: 'user@example.com', password: 'password123' };

    await login(profile);

    expect(message).toHaveBeenCalledWith(
      'danger',
      `An unknown error occurred, please try again later`,
      '#errorContainer'
    );

    expect(console.error).toHaveBeenCalledWith(testError);
  });
});
