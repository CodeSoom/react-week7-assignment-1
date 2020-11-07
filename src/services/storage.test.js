import { loadItem, saveItem, deleteItem } from './storage';

test('storage', () => {
  const key = 'accessToken';
  const value = 'ACCESSTOKEN';

  saveItem(key, value);

  expect(loadItem(key)).toBe(value);

  deleteItem(key);

  expect(loadItem(key)).toBeNull();
});
