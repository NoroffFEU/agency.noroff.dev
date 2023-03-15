import { deleteApplication } from './deleteApplication';
import { LocalStorageMock } from '../auth/storageMock';

const ID = '2';
const INVALID_ID = '';

const TEST_APPLICATION = {
  id: ID,
};

function mockDeleteApplication() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(TEST_APPLICATION),
  });
}

function mockFailDeleteApplication() {
  return Promise.resolve({
    ok: false,
    statusText: 'Missing Application ID',
  });
}

describe('deleteApplication', () => {
  it('Delete an application from the API', async () => {
    global.fetch = jest.fn(() => mockDeleteApplication());
    global.localStorage = new LocalStorageMock();

    const deletedApplication = await deleteApplication(ID);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(deletedApplication).toEqual('Deleted!');
  });

  it('Fails to delete application from API', async () => {
    global.fetch = jest.fn(() => mockFailDeleteApplication());
    global.localStorage = new LocalStorageMock();
    await expect(deleteApplication(INVALID_ID)).rejects.toThrow('Missing application ID');
    expect(fetch).toHaveBeenCalledTimes(0);
  });
});
