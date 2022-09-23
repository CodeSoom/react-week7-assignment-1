import {
  saveItem,
  loadItem,
  deleteItem,
} from './storage';

describe('storage', () => {
  const setItem = jest.fn();
  const getItem = jest.fn();
  const removeItem = jest.fn();

  beforeEach(() => {
    global.localStorage = {
      setItem,
      getItem,
      removeItem,
    };
  });

  afterEach(() => {
    setItem.mockClear();
    getItem.mockClear();
    removeItem.mockClear();
  });

  const storageKey = 'accessToken';
  const storageValue = 'ACCESS_TOKEN';

  describe('saveItem', () => {
    it('runs setItem in localStorage', async () => {
      saveItem(storageKey, storageValue);

      expect(setItem).toBeCalledWith(storageKey, storageValue);
    });
  });

  describe('loadItem', () => {
    it('runs getItem in localStorage', async () => {
      loadItem(storageKey);

      expect(loadItem).toBeCalledWith(storageKey);
    });
  });

  describe('deleteItem', () => {
    it('runs removeItem in localStorage', async () => {
      deleteItem(storageKey);

      expect(deleteItem).toBeCalledWith(storageKey);
    });
  });
});
