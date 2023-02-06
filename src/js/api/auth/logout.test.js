import { logout } from './logout.js';
import { LocalStorageMock } from './storageMock.js';
import { Store } from '../../storage/storage.js';

// Author: Truls Haakenstad @Menubrea
// Team: FE-User

global.localStorage = new LocalStorageMock();
global.window = jest.fn();
window.location = Object.assign(new URL('https://example.org'), {
  replace: jest.fn(),
});

const token = 'token';
const profile = { name: 'Frank', age: '3' };
const role = 'student';

new Store('token', token);
new Store('profile', profile);
new Store('role', role);

describe('logout()', () => {
  it('Clears stored data from localstorage when called', () => {
    expect(new Store('profile').state).toEqual(profile);
    expect(new Store('role').state).toEqual(role);
    expect(new Store('token').state).toEqual(token);

    logout();

    expect(new Store('profile').state).toEqual(null);
    expect(new Store('role').state).toEqual(null);
    expect(new Store('token').state).toEqual(null);
  });

  it('Replaces page location of app', () => {
    expect(window.location.replace).toHaveBeenCalled();
  });
});
