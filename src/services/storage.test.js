import { getItem, setItem } from './storage';

describe('storage', () => {
  it('get and set LocalStorage function work well', () => {
    const [key, value] = ['accessToken', 'okToken'];
    setItem(key, value);

    expect(getItem(key)).toEqual(value);
  });
});
