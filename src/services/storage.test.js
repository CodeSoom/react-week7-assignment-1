import { loadItem, saveItem, removeItem } from './storage';

describe('storage', () => {
  describe('loadItem', () => {
    beforeEach(() => {
      localStorage.accessToken = 'ACCESSTOKEN';
    });

    it('get data from localStorage', () => {
      const accessToken = loadItem('accessToken');

      expect(accessToken).toBe('ACCESSTOKEN');
    });
  });

  describe('saveItem', () => {
    it('set data to localStorage', () => {
      saveItem('accessToken', 'ACCESSTOKEN');

      expect(localStorage.accessToken).toBe('ACCESSTOKEN');
    });
  });

  describe('removeItem', () => {
    beforeEach(() => {
      localStorage.accessToken = 'ACCESSTOKEN';
    });

    it('remove data in localStorage', () => {
      removeItem('accessToken');

      expect(localStorage.accessToken).toBeUndefined();
    });
  });
});
