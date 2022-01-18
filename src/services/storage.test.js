import {
  saveItem,
  loadItem,
} from './storage';

test('storage', () => {
  const key = 'accessToken';
  const value = 'ACCESS_TOKEN';

  saveItem(key, value);

  expect(loadItem(key)).toEqual(value);
});
