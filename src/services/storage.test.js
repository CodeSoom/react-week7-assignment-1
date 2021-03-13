import { saveItem, loadItem } from './storage';

describe('storage', () => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();

  describe('saveItem', () => {
    it('sets given key and assigned value on localStorage', () => {
      const obj = {
        key: 'token',
        value: 'tddtddtddtdd',
      };

      saveItem(obj.key, obj.value);

      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    });
  });

  describe('loadItem', () => {
    it('loads storage with given key', () => {
      const key = 'token';

      loadItem(key);

      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    });
  });
});
