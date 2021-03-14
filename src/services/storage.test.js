import { loadItem, saveItem } from './storage';

describe('storage', () => {
  beforeEach(() => localStorage.clear());

  it('saveItem', () => {
    saveItem('accessToken', 'ACCESS_TOKEN');

    expect(localStorage.getItem('accessToken')).toBe('ACCESS_TOKEN');
  });

  it('loadItem', () => {
    localStorage.setItem('accessToken', 'ACCESS_TOKEN');

    expect(loadItem('accessToken')).toBe('ACCESS_TOKEN');
  });
});
