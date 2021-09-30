import {
  saveItem,
  loadItem,
} from './storage';

test('storage', () => {
  const key = 'user';

  const value = 'accessToken';

  saveItem(key, value);

  expect(loadItem(key)).toBe(value);
});
