import { createOffer } from './createOffer';

const OFFER_DATA = 'Input information';

const TEST_OFFER = OFFER_DATA;

function mockCreateOffer() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(TEST_OFFER),
  });
}

function mockFailCreateOffer() {
  return Promise.resolve({
    ok: false,
    statusText: 'Bad Request',
  });
}

describe('createOffer', () => {
  it('create an offer on a application', async () => {
    global.fetch = jest.fn(() => mockCreateOffer());
    const newOffer = await createOffer(OFFER_DATA);
    expect(newOffer).toEqual(TEST_OFFER);
  });

  it('fails to create an offer', async () => {
    global.fetch = jest.fn(() => mockFailCreateOffer());
    await expect(createOffer).rejects.toThrow('something went wrong, please try again');
  });
});
