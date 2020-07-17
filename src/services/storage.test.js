import { saveItem, loadItem, removeItem } from './storage';

describe('storage', () => {
  const ACCESS_TOKEN = 'ACCESS_TOKEN';

  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn().mockReturnValue(ACCESS_TOKEN);
    Storage.prototype.removeItem = jest.fn();
  });

  it('save item', () => {
    saveItem('accessToken', ACCESS_TOKEN);

    expect(localStorage.setItem).toBeCalledWith('accessToken', ACCESS_TOKEN);
  });

  it('load item', () => {
    const accessToken = loadItem('accessToken');

    expect(accessToken).toBe(ACCESS_TOKEN);
    expect(localStorage.getItem).toBeCalledWith('accessToken');
  });

  it('remove item', () => {
    removeItem('accessToken');

    expect(localStorage.removeItem).toBeCalledWith('accessToken');
  });
});
