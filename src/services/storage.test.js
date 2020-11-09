import { saveItem, loadItem, removeItem } from './storage';

describe('storage', () => {
  it('operate storage function', () => {
    const key = 'accessToken';
    const value = 'ACCESS_TOKEN';

    saveItem(key, value);

    expect(loadItem(key)).toBe(value);

    removeItem(key);

    expect(loadItem(key)).toBeNull();
  });
});
