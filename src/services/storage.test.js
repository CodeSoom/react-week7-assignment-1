import { loadItem, saveItem } from './storage';

test('storage', () => {
  given('key', () => 'key');
  given('item', () => 'item');

  saveItem(given.key, given.item);
  expect(loadItem(given.key)).toBe(given.item);
});
