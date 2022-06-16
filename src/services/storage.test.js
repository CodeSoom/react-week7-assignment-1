import { saveItem, loadItem } from './storage';

describe('storage', () => {
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');

  beforeEach(() => {
    Object.getPrototypeOf(window.localStorage).setItem = jest.fn();
    Object.getPrototypeOf(window.localStorage).getItem = jest.fn();
  });

  describe('saveItem', () => {
    it('calls localStorage setItem', () => {
      saveItem('key', 'value');

      expect(localStorage.setItem).toBeCalledWith('key', 'value');
    });
  });

  describe('loadItem', () => {
    it('calls localStorage getItem', () => {
      loadItem('key');

      expect(localStorage.getItem).toBeCalledWith('key');
    });
  });
});
