import {
  loadItem,
  saveItem,
} from './storage';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();

    localStorage.setItem.mockClear();
  });

  describe('saveItem', () => {
    it('saves item', () => {
      const key = 'accessToken';
      const value = 'ACCESS.TOKEN';

      saveItem(key, value);

      expect(localStorage.setItem).toHaveBeenLastCalledWith(key, value);
    });
  });

  describe('loadItem', () => {
    it('gets item', () => {
      const key = 'accessToken';

      loadItem(key);

      expect(localStorage.getItem).toHaveBeenLastCalledWith(key);
    });
  });
});
