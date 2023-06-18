import { login, logout, getToken } from './session';
import { saveItem, loadItem, deleteItem } from './storage';

describe('session', () => {
  const [key, value] = ['accessToken', 'TOKEN'];
  it('login', () => {
    login('accessToken');
    saveItem(key, value);
  });
  it('getToken', () => {
    getToken();
    expect(loadItem(key)).toEqual(value);
  });
  it('logout', () => {
    logout('accessToken');
    expect(deleteItem(key)).toBeUndefined();
  });
});
