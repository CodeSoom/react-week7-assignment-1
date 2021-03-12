import { loadItem, saveItem } from './storage';

describe('storage', () => {
  beforeEach(() => localStorage.clear());

  it('saveItem', () => {
    saveItem('accessToken', 'ACCESS_TOKEN');

    expect(localStorage.getItem('accessToken')).toBe('ACCESS_TOKEN');
  });

  context('accessToken이 undefined일 경우', () => {
    it('undefined를 반환한다.', () => {
      localStorage.setItem('accessToken', undefined);

      expect(loadItem('accessToken')).toBe(undefined);
    });
  });

  context('accessToken이 undefined이 아닌 경우', () => {
    it('문자열로 변환된 accessToken를 반환한다.', () => {
      localStorage.setItem('accessToken', 12348);

      expect(loadItem('accessToken')).toBe('12348');
    });
  });
});
