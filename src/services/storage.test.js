import {
  saveItem,
  loadItem,
} from './storage';

describe('storage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    const mockFridge = {};

    global.Storage.prototype.setItem = jest.fn(({ key, value }) => {
      mockFridge[key] = value;
    });

    global.Storage.prototype.getItem = jest.fn((key) => mockFridge[key]);
  });

  describe('saveItem', () => {
    it('calls setItem', () => {
      saveItem({ key: 'accessToken', value: 'TOKEN' });

      expect(global.Storage.prototype.setItem).toHaveBeenCalled();
    });
  });

  describe('loadItem', () => {
    it('calls getItem', () => {
      loadItem('accessToken');

      expect(global.Storage.prototype.getItem).toHaveBeenCalled();
    });
  });
});
