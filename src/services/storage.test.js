import { saveItem, loadItem } from './storage';

import ACCESS_TOKEN from '../../fixtures/accessToken';

describe('storage', () => {
  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn().mockReturnValue(ACCESS_TOKEN);
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
});
