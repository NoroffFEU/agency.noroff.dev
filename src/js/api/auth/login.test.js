import { LocalStorageMock } from './storageMock.js';
import { Store } from '../../storage/storage.js';
import { login } from './login.js';

// Author: Truls Haakenstad @Menubrea
// Team: FE-User

global.localStorage = new LocalStorageMock();
global.window = jest.fn();
errorContainer = jest.fn();

window.location = Object.assign(new URL('https://example.org'), {
  replace: jest.fn(),
});

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve(profile),
  });
}

function fetchFailure(status = 403, statusText = 'Invalid email/password') {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

const valid_credentials = {
  email: 'test@stud.noroff.no',
  password: '12345678',
};

const invalid_credentials = {
  email: 'test@test.no',
  password: '123',
};

const profile = {
  userId: '321',
  firstName: 'John',
  lastName: 'Doe',
  email: 'test@test.no',
  token: 'JWT',
  role: 'student',
};

describe('login()', () => {
  it('Returns and stores a token when provided with valid credentials', async () => {
    expect(new Store('token').state).toEqual(null);
    global.fetch = jest.fn(() => fetchSuccess());
    await login(valid_credentials);
    expect(new Store('token').state).toEqual('JWT');
    new Store('token').clear();
    new Store('profile').clear();
    new Store('role').clear();
  });

  it('Returns and stores a profile when provided with valid credentials', async () => {
    expect(new Store('profile').state).toEqual(null);
    global.fetch = jest.fn(() => fetchSuccess());
    await login(valid_credentials);
    expect(new Store('profile').state).toEqual({ firstName: 'John', lastName: 'Doe', userId: '321' });
    new Store('profile').clear();
    new Store('role').clear();
    new Store('token').clear();
  });

  it('Returns and stores a role when provided with valid credentials', async () => {
    expect(new Store('role').state).toEqual(null);
    global.fetch = jest.fn(() => fetchSuccess());
    await login(valid_credentials);
    expect(new Store('role').state).toEqual('student');
    new Store('role').clear();
  });

  it('throws error 403 when provided with invalid credentials', async () => {
    global.fetch = jest.fn(() => fetchFailure());
    try {
      await login(invalid_credentials);
    } catch (e) {
      await expect(login).rejects.toThrow('Invalid email/password');
      expect(errorContainer.innerHTML).toEqual('Incorrect username/password');
    }
  });
});
