/* eslint-disable no-proto */
import { saveItem, loadItem } from './storage';

describe('storage', () => {
  jest.spyOn(localStorage.__proto__, 'setItem');
  jest.spyOn(localStorage.__proto__, 'getItem');

  localStorage.__proto__.setItem = jest.fn();
  localStorage.__proto__.getItem = jest.fn();

  describe('saveItem', () => {
    it('로컬스토리지에 저장합니다.', () => {
      saveItem({ accessToken: 'ACCESS_TOKEN' });

      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('loadItem', () => {
    it('로컬스토리지에서 불러옵니다.', () => {
      loadItem({ accessToken: 'ACCESSTOKEN' });

      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });
});
