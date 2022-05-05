import { loadItem, saveItem } from './storage';

describe('storage', () => {
  beforeEach(() => {
    const mockStorage = {};
    global.Storage.prototype.setItem = jest.fn(({ key, value }) => {
      mockStorage[key] = value;
    });

    global.Storage.prototype.getItem = jest.fn((key) => mockStorage[key]);
  });

  describe('saveItem', () => {
    it('"localStorage의 setItem 함수를 호출한다.', () => {
      saveItem('피카츄', '전기 포켓몬');

      expect(global.Storage.prototype.setItem).toHaveBeenCalled();
    });
  });

  describe('loadItem', () => {
    it('"localStorage의 getItem 함수를 호출한다.', () => {
      loadItem('피카츄');

      expect(global.Storage.prototype.getItem).toHaveBeenCalled();
    });
  });
});
