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

    it('loads item', () => {
      const item = loadItem('accessToken');

      expect(item).toBe('TOKEN');
    });
  });

  describe('saveItem', () => {
    it('loads item', () => {
      saveItem('accessToken', 'TOKEN');

      const item = loadItem('accessToken');

      expect(item).toBe('TOKEN');
    });
  });
});
