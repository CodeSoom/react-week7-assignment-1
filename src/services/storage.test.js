import {
  saveItem,
  loadItem,
} from './storage';

describe('storage', () => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();

  describe('saveItem', () => {
    it('runs setItem', async () => {
      saveItem('accessToken', 'ACESS-TOKEN');

      expect(Storage.prototype.setItem).toBeCalled();
    });
  });

  describe('loadItem', () => {
    it('runs getItem', async () => {
      loadItem('accessToken');

      expect(Storage.prototype.getItem).toBeCalled();
    });
  });
});
