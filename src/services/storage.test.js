import {
  loadItem,
  saveItem,
} from './storage';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('loadItem', () => {
    beforeEach(() => {
      localStorage.setItem('accessToken', 'TOKEN');
    });

    it('load items', () => {
      const item = loadItem('accessToken');

      expect(item).toBe('TOKEN');
    });
  });

  describe('saveItem', () => {
    it('load itmes', () => {
      saveItem('accessToken', 'TOKEN');

      const item = loadItem('accessToken');

      expect(item).toBe('TOKEN');
    });
  });
});
