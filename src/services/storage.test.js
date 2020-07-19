import { saveItem, loadItem } from './storage';

describe('localStorage', () => {
  const KEY = 'accessToken';
  const VALUE = 'ACCESS_TOKEN';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should save to localStorage', () => {
    saveItem(KEY, VALUE);

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  });

  it('should load to localStorage', () => {
    loadItem(KEY);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });
});
