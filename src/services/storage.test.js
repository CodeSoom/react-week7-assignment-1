/* eslint-disable no-proto */
import { saveItem, loadItem } from './storage';

describe('storage', () => {
  jest.spyOn(localStorage.__proto__, 'setItem');
  jest.spyOn(localStorage.__proto__, 'getItem');

  beforeEach(() => {
    localStorage.__proto__.setItem = jest.fn();
    localStorage.__proto__.getItem = jest.fn();
  });

  describe('saveItem', () => {
    it('saves items in localStorage', () => {
      saveItem({ key: '', value: '' });

      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('loadItem', () => {
    it('loads items in localStorage', () => {
      loadItem({ key: '' });

      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });
});
