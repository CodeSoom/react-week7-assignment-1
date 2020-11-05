import { loadItem, saveItem, removeItem } from './storage';

describe('storage', () => {
  describe('loadItem', () => {
    beforeEach(() => {
      localStorage.accessToken = 'ACCESSTOKEN';
    });

    it('run loadItem', () => {
      const accessToken = loadItem('accessToken');

      expect(accessToken).toBe('ACCESSTOKEN');
    });
  });

  describe('saveItem', () => {
    it('run saveItem', () => {
      saveItem('accessToken', 'ACCESSTOKEN');

      expect(localStorage.accessToken).toBe('ACCESSTOKEN');
    });
  });

  describe('removeItem', () => {
    beforeEach(() => {
      localStorage.accessToken = 'ACCESSTOKEN';
    });

    it('remove data from localStorage', () => {
      removeItem('accessToken');

      expect(localStorage.accessToken).toBeUndefined();
    });
  });
});
