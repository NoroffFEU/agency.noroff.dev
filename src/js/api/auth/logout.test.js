import { logout } from './logout.js';
import { LocalStorageMock } from './storageMock.js';
import { Store } from '../../storage/storage.js';

describe('logout function', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    delete window.location;
    window.location = { replace: jest.fn() };
    Storage.prototype.removeItem = jest.fn();
  });

  afterEach(() => {
    window.location = originalLocation;
    jest.clearAllMocks();
  });

  it('should remove token, profile, and role from both local and session storages', () => {
    logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('token');
    expect(localStorage.removeItem).toHaveBeenCalledWith('profile');
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('profile');
    expect(localStorage.removeItem).toHaveBeenCalledWith('role');
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('role');
  });

  it('should redirect to the root path', () => {
    logout();

    expect(window.location.replace).toHaveBeenCalledWith('/');
  });
});
