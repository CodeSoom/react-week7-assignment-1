import { loadItem, saveItem } from './storage';

jest.mock('../services/storage');

describe('storage', () => {
  describe('loadItem', () => {
    const accessToken = 'ACCESS_TOKEN';
    beforeEach(() => {
      loadItem.mockImplementation(() => accessToken);
    });

    it('get value of key', () => {
      expect(loadItem('accessToken')).toEqual(accessToken);
    });
  });

  describe('saveItem', () => {
    const accessToken = 'ACCESS_TOKEN';
    beforeEach(() => {
      loadItem.mockImplementation(() => accessToken);
      saveItem.mockImplementation(() => null);
    });

    it('key and value is saved', () => {
      saveItem('accessToken', 'ACCESS_TOKEN');
      expect(loadItem('accessToken')).toEqual('ACCESS_TOKEN');
    });
  });
});
