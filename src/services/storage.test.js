import { saveItem } from './storage';

jest.mock('./storage');

describe('localStorage', () => {
  it('saveItem', () => {
    saveItem('accessToken', 'ACCESS_TOKEN');

    expect(saveItem).toBeCalled();
  });
});
