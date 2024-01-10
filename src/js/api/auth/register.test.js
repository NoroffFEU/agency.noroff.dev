import { register } from './register.js';

// Author: Truls Haakenstad @Menubrea
// Team: FE-User

const result = {
  name: 'Frank',
  age: 54,
  gender: 'Male',
};

const profile = {
  name: 'Frank',
  age: 54,
  gender: 'Male',
};

const bad_input = {
  name: '',
  age: '',
  gender: '',
};

global.window = jest.fn();
window.location = Object.assign(new URL('https://example.org'), {
  replace: jest.fn(),
});

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: 'OK',
    json: () => Promise.resolve(result),
  });
}

function fetchFailure(status = 500, statusText = 'Internal Server Error') {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
    json: () => Promise.reject(new Error('Internal Server Error')),
  });
}

describe('register()', () => {
  it('Returns the result of the response on 201 created', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const registeredProfile = await register(profile);

    const expectedResult = {
      data: result,
      error: undefined,
    };

    expect(registeredProfile).toEqual(expectedResult);
  });

  it('throws error when !response.ok', async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(register(bad_input)).rejects.toThrow('Internal Server Error');
  });
});
