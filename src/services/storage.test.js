import { setItem, getItem, clear } from './storage';

describe('storage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
  const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
  const mockClearItem = jest.spyOn(Storage.prototype, 'clear');

  describe('setItem', () => {
    it('calls "setItem"', () => {
      setItem('accessToken', 'ACCESS_TOKEN');

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

  describe('clear', () => {
    it('called storage clear', () => {
      clear();

      expect(mockClearItem).toBeCalled();
    });
  });
});
