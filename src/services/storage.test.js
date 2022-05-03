import { loadItem, saveItem } from './storage';

jest.mock('./storage');

const mockStorage = {};

const localStorageMock = {
  getItem: jest.fn((key) => mockStorage[key]),
  setItem: jest.fn((key, value) => { mockStorage[key] = value; }),
};
global.localStorage = localStorageMock;

describe('storage', () => {
  beforeEach(() => {
    saveItem.mockImplementation((key, value) => { localStorage.setItem(key, value); });
    saveItem('피카츄', '전기 포켓몬');
    saveItem('파이리', '불 포켓몬');
    loadItem.mockImplementation((key) => localStorage.getItem(key));
  });

  context('storage에 값이 존재 할 때', () => {
    it('해당 값을 가져온다', () => {
      const result = loadItem('피카츄');

      expect(result).toBe('전기 포켓몬');
    });
  });

  context('storage에 값이 없을 때', () => {
    it('빈 값을 가져온다', () => {
      const result = loadItem('라이츄');

      expect(result).toBe(null);
    });
  });
});
