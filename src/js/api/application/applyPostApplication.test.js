import { applyPostApplication } from './applyPostApplication.js';
import { dummyApiUrl, dummyApiGetPostById } from '../constants.js';

global.window = jest.fn();

const id = 2;

window.location = Object.assign(new URL(`${dummyApiUrl}${dummyApiGetPostById}${id}`), {
  replace: jest.fn(),
});

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve(application),
  });
}

const application = {
  // waiting for structure
};

describe('applyPostApplication()', () => {
  it('successfully returns application object', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await applyPostApplication();
  });
});
