import { loadItem, saveItem, deleteItem } from './storage';

describe('storage', () => {
  describe('loadItem', () => {
    beforeEach(() => {
      localStorage.accessToken = 'ACCESS_TOKEN';
    });

    it('returns item', () => {
      const accessToken = loadItem('accessToken');

      expect(accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('saveItem', () => {
    it('saves item', () => {
      saveItem('accessToken', 'ACCESS_TOKEN');

      expect(localStorage.accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('deleteItem', () => {
    beforeEach(() => {
      localStorage.accessToken = 'ACCESS_TOKEN';
    });

    it('deletes item', () => {
      deleteItem('accessToken');

      expect(localStorage.accessToken).toBeUndefined();
    });
  });
});
