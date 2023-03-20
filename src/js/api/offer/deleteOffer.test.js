import { deleteOffer } from './deleteOffer.js';
import { LocalStorageMock } from '../auth/storageMock';

const ID = '2';
const INVALID_ID = '';

const TEST_OFFER = {
  id: ID,
};

function mockDeleteOffer() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(TEST_OFFER),
  });
}

function mockFailDeleteOffer() {
  return Promise.resolve({
    ok: false,
    statusText: 'Missing Offer ID',
  });
}

describe('deleteOffer', () => {
  it('Delete an offer from the API', async () => {
    global.fetch = jest.fn(() => mockDeleteOffer());
    global.localStorage = new LocalStorageMock();
    const deletedOffer = await deleteOffer(ID);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(deletedOffer).toEqual(TEST_OFFER);
  });

  it('Fails to delete offer from API', async () => {
    global.fetch = jest.fn(() => mockFailDeleteOffer());
    global.localStorage = new LocalStorageMock();
    await expect(deleteOffer(INVALID_ID)).rejects.toThrow('Deleting an offer requires an offerID');
    expect(fetch).toHaveBeenCalledTimes(0);
  });
});
