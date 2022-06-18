import { saveToken, loadToken, removeToken } from './authStorage';

jest.mock('./authStorage');

jest.spyOn(localStorage, 'setItem');
jest.spyOn(localStorage, 'getItem');
jest.spyOn(localStorage, 'removeItem');

describe('authStorage', () => {
  describe('saveToken', () => {
    it('calls localStorage.setItem', () => {
      saveToken('accessToken');

      expect(saveToken).toBeCalledWith('accessToken');
    });
  });

  describe('loadToken', () => {
    it('calls localStorage.getItem', () => {
      loadToken();

      expect(loadToken).toBeCalled();
    });
  });

  describe('removeToken', () => {
    it('calls localStorage.removeItem', () => {
      removeToken();

      expect(removeToken).toBeCalled();
    });
  });
});
