import { loadItem, saveItem, deleteItem } from './storage';

test('storage', () => {
  saveItem('accessToken', 'ACCESS_TOKEN');

  expect(loadItem('accessToken')).toBe('ACCESS_TOKEN');

  deleteItem('accessToken');

  expect(loadItem('accessToken')).toBeNull();
});
