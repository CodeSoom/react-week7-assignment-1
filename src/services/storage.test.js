import { clearItem, loadItem, saveItem } from './storage';

describe('storage', () => {
  describe('saveItem', () => {
    it('calls setItem of localStorage', () => {
      saveItem('newKey', 'newValue');

      expect(localStorage.setItem).toBeCalledWith('newKey', 'newValue');
    });
  });

  describe('loadItem', () => {
    beforeEach(() => {
      localStorage.getItem.mockReturnValue('item');
    });

    it('calls getItem of localStorage', () => {
      loadItem('newKey');

      expect(localStorage.getItem).toBeCalledWith('newKey');
    });

    it('returns item saved in localStorage', () => {
      const item = loadItem('newKey');

      expect(item).toBe('item');
    });
  });

  describe('clearItem', () => {
    it('calls removeItem of localStorage', () => {
      clearItem('newKey');

      expect(localStorage.removeItem).toBeCalledWith('newKey');
    });
  });
});
