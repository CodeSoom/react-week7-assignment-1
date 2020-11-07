import { loadItem, saveItem, removeItem } from './storage';

jest.mock('./storage');

describe('storage', () => {
  const key = 'accessToken';
  const value = 'ACCESSTOKEN';

  it('loadItem', () => {
    loadItem.mockImplementation(() => value);

    const accessToken = loadItem(key);

    expect(accessToken).toBe(value);
  });

  it('saveItem', () => {
    saveItem(key, value);

    expect(saveItem).toBeCalledWith(key, value);
  });

  it('removeItem', () => {
    removeItem(key);

    expect(removeItem).toBeCalledWith(key);
  });
});
