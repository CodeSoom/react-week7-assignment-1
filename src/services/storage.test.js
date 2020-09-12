import {
  saveItem,
  loadItem,
  removeItem,
} from './storage';

describe('storage', () => {
  const KEY = 'accessToken';
  const VALUE = 'I_AM_T@KEN';

  it('save item in localstorage', () => {
    Storage.prototype.setItem = jest.fn();

    saveItem(KEY, VALUE);

    expect(localStorage.setItem).toBeCalledWith(KEY, VALUE);
  });

  it('load item in localstorage', () => {
    Storage.prototype.getItem = jest.fn().mockReturnValue(VALUE);

    loadItem(KEY);

    expect(localStorage.getItem).toBeCalledWith(KEY);
  });

  it('remove item in localstorage', () => {
    Storage.prototype.removeItem = jest.fn();

    removeItem(KEY);

    expect(localStorage.removeItem).toBeCalledWith(KEY);
  });
});
