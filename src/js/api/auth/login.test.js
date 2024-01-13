import { login } from './login.js';
import { message } from '../../utilities/message/message.js';
import { callLoginApi } from './callLoginApi.js';
import * as utils from './utils.js';

jest.mock('./utils.js', () => ({
  clearProfileData: jest.fn(),
  getRedirectUrl: jest.fn().mockReturnValue('/some-url'),
  handleLoginRedirect: jest.fn(),
  storeProfileData: jest.fn(),
}));

jest.mock('../../storage/storage.js');
jest.mock('../../utilities/message/message.js');
jest.mock('./callLoginApi.js');

const mockUserData = {
  token: 'token123',
  role: 'Applicant',
  id: '1',
  email: 'user@example.com',
};

describe('login', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
    jest.clearAllMocks();
  });

  it('should store user data and redirect on successful login', async () => {
    callLoginApi.mockResolvedValue({
      userData: { ...mockUserData },
      error: null,
    });

    const profile = { email: 'user@example.com', password: 'password123', remember: 'on' };
    await login(profile);
    expect(utils.storeProfileData).toHaveBeenCalledWith(
      expect.objectContaining({
        ...mockUserData,
      }),
      true,
      expect.anything() // The store class
    );

    expect(utils.handleLoginRedirect).toHaveBeenCalledWith('/some-url');
  });

  it('should not remember login if remember is not checked', async () => {
    callLoginApi.mockResolvedValue({
      userData: { ...mockUserData },
      error: null,
    });

    const profile = { email: 'user@example.com', password: 'password123', remember: 'off' };
    await login(profile);
    // The second argument is the persist argument, which saves to session storage if false
    expect(utils.storeProfileData).toHaveBeenCalledWith(
      expect.objectContaining({
        ...mockUserData,
      }),
      false,
      expect.anything() // The store class
    );
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

    expect(utils.storeProfileData).not.toHaveBeenCalled();
  });

  it('should handle unknown errors', async () => {
    const testError = new Error('Network error');
    callLoginApi.mockRejectedValue(testError);
    const profile = { email: 'user@example.com', password: 'password123' };

    await login(profile);

    expect(message).toHaveBeenCalledWith(
      'danger',
      `An unknown error occurred. Please try again later`,
      '#errorContainer'
    );

    expect(console.error).toHaveBeenCalledWith(testError);
  });
});
