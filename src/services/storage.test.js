import { loadItem } from './storage';

describe('storage', () => {
  const getItem = jest.fn(() => 'item');
  const setItem = jest.fn();

  beforeEach(() => {
    Storage.prototype.getItem = getItem;
    Storage.prototype.setItem = setItem;
  });

  it('loadItem', () => {

    expect(loadItem('key')).toBe('item');
  });
});
