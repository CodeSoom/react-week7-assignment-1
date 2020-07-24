import {
  loadItem,
  saveItem,
} from './storage';

describe('storage', () => {
  it('saveItem', () => {
    const key = 'accessToken';
    const value = 'ACCESSTOKEN';

    saveItem(key, value);

    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, value);
  });

  it('loadItem', () => {
    const key = 'accessToken';

    loadItem(key);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(key);
  });
});
