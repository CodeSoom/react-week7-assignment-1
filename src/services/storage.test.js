import {
  getItemFromStorage, setItemToStorage, removeItemFromStorage,
} from './storage';

import ACCESS_TOKEN from '../../fixtures/accessToken';

describe('storage', () => {
  beforeAll(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.removeItem = jest.fn();
  });

  describe('setItemToStorage', () => {
    it('fires localStorage.setItem', () => {
      setItemToStorage('accessToken', ACCESS_TOKEN);
      expect(localStorage.setItem).toBeCalledTimes(1);
    });
  });

  describe('getItemFromStorage', () => {
    it('fires localStorage.getItem', () => {
      getItemFromStorage('accessToken');
      expect(localStorage.getItem).toBeCalledTimes(1);
    });
  });

  describe('removeItemFromStorage', () => {
    it('fires localStorage.removeItem', () => {
      removeItemFromStorage('accessToken');
      expect(localStorage.removeItem).toBeCalledTimes(1);
    });
  });
});
