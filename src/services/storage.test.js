import { saveItem, loadItem, removeItem } from './storage';

test('storage', () => {
  saveItem('accessToken', 'ACCESS_TOKEN');

  expect(loadItem('accessToken')).toBe('ACCESS_TOKEN');

  removeItem('accessToken');

  expect(loadItem('accessToken')).toBeNull();
});
