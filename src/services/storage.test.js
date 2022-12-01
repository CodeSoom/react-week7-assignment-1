import { saveItem, loadItem, deleteItem } from './storage';

describe('storage', () => {
  it('localStorage의 데이터를 사용할 수 있다', () => {
    const [key, value] = ['accessToken', 'TOKEN'];
    saveItem(key, value);

    expect(loadItem(key)).toEqual(value);
    expect(deleteItem(key)).toBeUndefined();
  });
});
