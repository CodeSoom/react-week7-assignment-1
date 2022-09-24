import {
  saveItem,
  loadItem,
  deleteItem,
} from './storage';

describe('storage', () => {
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
  const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
  const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const storageKey = 'accessToken';
  const storageValue = 'ACCESS_TOKEN';

  describe('saveItem', () => {
    it('runs setItem in localStorage', async () => {
      saveItem(storageKey, storageValue);

      expect(mockSetItem).toBeCalledWith(storageKey, storageValue);
    });
  });

  describe('loadItem', () => {
    it('runs getItem in localStorage', async () => {
      loadItem(storageKey);

      expect(mockGetItem).toBeCalledWith(storageKey);
    });
  });

  describe('deleteItem', () => {
    it('runs removeItem in localStorage', async () => {
      deleteItem(storageKey);

      expect(mockRemoveItem).toBeCalledWith(storageKey);
    });
  });
});
