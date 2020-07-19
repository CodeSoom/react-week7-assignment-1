import {
  saveItem,
  loadItem,
  deleteItem,
} from './storage';

describe('storage', () => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.removeItem = jest.fn();

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

  describe('deleteItem', () => {
    it('runs removeItem', async () => {
      deleteItem('accessToken');

      expect(Storage.prototype.removeItem).toBeCalled();
    });
  });
});
