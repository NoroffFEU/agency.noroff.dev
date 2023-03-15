import { deleteApplication } from './deleteApplication';

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
    const deletedApplication = await deleteApplication(ID);
    expect(deletedApplication).toEqual(TEST_APPLICATION);
  });

  it('Fails to delete application from API', async () => {
    global.fetch = jest.fn(() => mockFailDeleteApplication());
    await expect(deleteApplication(INVALID_ID)).rejects.toThrow('Missing application ID');
  });
});
