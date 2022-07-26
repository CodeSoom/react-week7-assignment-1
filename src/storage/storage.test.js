import { saveItem, loadItem } from '.';

describe('storage', () => {
  describe('saveItem', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('save item in localStorage', () => {
      const accessToken = 'ACCESS_TOKEN';

      saveItem('accessToken', accessToken);

      expect(localStorage.getItem('accessToken')).toBe(accessToken);
    });
  });

  describe('loadItem', () => {
    beforeEach(() => {
      localStorage.setItem('accessToken', 'ACCESS_TOKEN');
    });

    it('load item from localStorage', () => {
      const result = loadItem('accessToken');

      expect(result).toBe('ACCESS_TOKEN');
    });
  });
});
