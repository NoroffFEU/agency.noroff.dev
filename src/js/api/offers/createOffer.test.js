import { createOffer } from './createOffer.js';

const OFFER_DATA = 'Input information';

const TEST_OFFER = OFFER_DATA;

function mockCreateOffer() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(TEST_OFFER),
  });
}

function mockFailCreateOffer() {
  return Promise.reject(new Error('something went wrong, please try again'));
}

describe('createOffer', () => {
  it('create an offer on a application', async () => {
    global.fetch = jest.fn(() => mockCreateOffer());
    const newOffer = await createOffer(OFFER_DATA);
    expect(newOffer).toEqual(TEST_OFFER);
  });

  it('fails to create an offer', async () => {
    global.fetch = jest.fn(() => mockFailCreateOffer());
    await expect(createOffer(OFFER_DATA)).rejects.toThrow('something went wrong, please try again');
  });
});
