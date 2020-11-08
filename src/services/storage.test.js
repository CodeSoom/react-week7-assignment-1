import {
  saveItem,
  loadItem,
} from './storage';

describe('storage', () => {
  const { key, value } = { key: 'item', value: 'ITEM' };

  it('save item into localStorage', async () => {
    expect(saveItem(key, value)).toBeUndefined();
  });

  it('load item from localStorage', async () => {
    expect(loadItem(key)).toEqual(value);
  });
});
