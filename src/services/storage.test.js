import { saveItem, loadItem, deleteItem } from './storage';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('saveItem', () => {
    it('equal to localstorage setItem', () => {
      saveItem({ key: 'key', value: 'value' });

      expect(localStorage.getItem('key')).toBe('value');
    });
  });

  describe('loadItem', () => {
    it('equal to localstorage getItem', () => {
      localStorage.setItem('key', 'value');

      expect(loadItem({ key: 'key' })).toEqual(localStorage.getItem('key'));
    });
  });

  describe('deleteItem', () => {
    it('equal to localstorage removeItem', () => {
      localStorage.setItem('key', 'value');

      deleteItem({ key: 'key' });

      expect(localStorage.length).toBe(0);
    });
  });
});
