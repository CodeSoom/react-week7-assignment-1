import {
  saveItem,
  removeItem,
  loadItem,
} from './storage';

describe('storage', () => {
  const key = 'accessToken';
  const value = 'ACCESS_TOKEN';

  it('saves data to local storage', () => {
    saveItem(key, value);
    expect(loadItem(key)).toBe(value);
  });

  it('removes data from local storage', () => {
    removeItem(key);
    expect(loadItem(key)).toBeNull();
  });
});
