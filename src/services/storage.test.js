import { saveItem, loadItem, removeItem } from './storage';

import ACCESS_TOKEN from '../../fixtures/accessToken';

test('storage', () => {
  saveItem('accessToken', ACCESS_TOKEN);

  expect(loadItem('accessToken')).toBe(ACCESS_TOKEN);

  removeItem('accessToken');

  expect(loadItem('accessToken')).not.toBe(ACCESS_TOKEN);
});
