import { loadItem } from './storage';

describe('loadItem', () => {
  beforeEach(() => {
    const localStorage = { accessToken: 'ACCESSTOKEN' };
    Storage.prototype.getItem = jest.fn((key) => localStorage[key]);
  });

  it('입력한 key 값을 가져옵니다.', () => {
    const accessToken = loadItem('accessToken');

    expect(accessToken).toEqual('ACCESSTOKEN');
  });
});
