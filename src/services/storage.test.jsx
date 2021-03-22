import { saveItem, loadItem } from './storage';

describe('saveItem', () => {
  it('saves item in local storage', () => {
    saveItem('key', 'value');

    expect(localStorage.getItem('key')).toBe('value');
  });
});

describe('loadItem', () => {
  it('loads item in local storage', () => {
    localStorage.setItem('key', 'value');

    expect(loadItem('key')).toBe('value');
  });
});
