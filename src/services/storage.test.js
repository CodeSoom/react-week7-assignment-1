/* eslint-disable no-proto */
import { saveItem, loadItem } from './storage';

describe('storage', () => {
  jest.spyOn(localStorage.__proto__, 'setItem');
  jest.spyOn(localStorage.__proto__, 'getItem');

  localStorage.__proto__.setItem = jest.fn();
  localStorage.__proto__.getItem = jest.fn();

  describe('saveItem', () => {
    it('saves item in localStorage', () => {
      saveItem({ key: '1', value: 'hi' });

      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('loadItem', () => {
    it('gets item in localStorage', () => {
      loadItem({ key: '1' });

      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });
});
