import { saveItem, loadItem } from './storage';

describe('loadItem', () => {
  it('입력한 key 값을 가져옵니다.', () => {
    const key = 'accessToken';
    const value = 'ACCESSTOKEN';

    expect(loadItem(key)).toBeNull();
    saveItem(key, value);
    expect(loadItem(key)).toBe(value);
  });
});
