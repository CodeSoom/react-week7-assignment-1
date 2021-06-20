import { saveItem, loadItem } from './storage';

test('storage', () => {
  saveItem('accessToken', 'ACCESS_TOKEN');

  expect(loadItem('accessToken')).toBe('ACCESS_TOKEN');
});
