import { saveItem, getItem } from './storage';

describe('storage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
  const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');

  describe('saveItem', () => {
    it('calls "setItem"', () => {
      saveItem('accessToken', 'ACCESS_TOKEN');

      expect(mockSetItem).toBeCalledWith('accessToken', '"ACCESS_TOKEN"');
    });
  });

  describe('getItem', () => {
    beforeEach(() => {
      mockGetItem.mockImplementation(() => '"ACCESS_TOKEN"');
    });

    it('returns accessToken', () => {
      const storageItem = getItem('accessToken');

      expect(storageItem).toEqual('ACCESS_TOKEN');
    });
  });
});
