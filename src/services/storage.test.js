import { loadItem } from './storage'

describe('storage', () => {
  const getItem = jest.fn();
  const setItem = jest.fn();

  beforeEach(() => {
    getItem.mockImplementation(() => 'item');

    global.localStorage = { getItem, setItem };
  });

  test('loadItem', () => {
    expect(loadItem('key')).toBe('item');
  });
});
