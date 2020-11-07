import { loadItem, saveItem, deleteItem } from './storage';

describe('storage', () => {
  const key = 'accessToken';
  const value = 'ACCESSTOKEN';

  const getItem = jest.fn(() => value);
  const setItem = jest.fn();
  const removeItem = jest.fn();

  beforeEach(() => {
    Storage.prototype.getItem = getItem;
    Storage.prototype.setItem = setItem;
    Storage.prototype.removeItem = removeItem;
  });

  it('loadItem', () => {
    expect(loadItem(key)).toBe(value);
  });

  it('saveItem', () => {
    saveItem(key, value);

    expect(setItem).toBeCalledWith(key, value);
  });

  it('deleteItem', () => {
    deleteItem(key);

    expect(removeItem).toBeCalledWith(key);
  });
});
