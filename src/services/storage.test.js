import { getLocalStorageItem, setLocalStorageItem } from './storage';

test('getLocalStorageItem', () => {
  const key = 'name';
  const value = 'value';

  setLocalStorageItem(key, value);
  const item = getLocalStorageItem(key);

  expect(item).toBe(value);
});
