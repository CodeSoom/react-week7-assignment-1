import {
  saveItem,
  loadItem,
} from './storage';

describe('storage', () => {
  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn().mockReturnValue('ACCESS_TOKEN');
  });

  it('saves item', () => {
    saveItem('accessToken', 'ACCESS_TOKEN');
    expect(localStorage.setItem).toBeCalledWith('accessToken', 'ACCESS_TOKEN');
  });

  it('loads item', () => {
    loadItem('accessToken');
    expect(localStorage.getItem).toBeCalledWith('accessToken');
  });
});
