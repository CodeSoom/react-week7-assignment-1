import { loadItem, saveItem } from './stroage';

describe('storage', () => {
  describe('saveItem', () => {
    it('calls setItem of localStorage', () => {
      saveItem('newKey', 'newValue');

      expect(localStorage.setItem).toBeCalledWith('newKey', 'newValue');
    });
  });

  describe('loadItem', () => {
    it('calls getItem of localStorage', () => {
      loadItem('newKey');

      expect(localStorage.getItem).toBeCalledWith('newKey');
    });
  });
});
