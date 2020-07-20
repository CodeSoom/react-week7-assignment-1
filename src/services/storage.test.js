import { saveItem, loadItem, deleteItem } from './storage';

describe('localStorage', () => {
  const KEY = 'accessToken';
  const VALUE = 'ACCESS_TOKEN';

  beforeEach(() => {
    localStorage.clear();
  });

  it('save to localStorage', () => {
    saveItem(KEY, VALUE);

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  });

  it('load to localStorage', () => {
    loadItem(KEY);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });

  it('delete to localStorage', () => {
    deleteItem(KEY);

    expect(localStorage.removeItem).toHaveBeenLastCalledWith(KEY);
  });
});
