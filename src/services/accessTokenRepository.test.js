import {
  saveToken,
  deleteToken,
  getToken,
} from './accessTokenRepository';

describe('accessTokenRepository', () => {
  it('save the accessToken', () => {
    const accessToken = 'TESTACCESSTOKEN';

    saveToken(accessToken);

    const savedToken = localStorage.getItem('accessToken');

    expect(savedToken).toBe(accessToken);
  });

  it('delete current accessToken', () => {
    const accessToken = 'TESTACCESSTOKEN';

    saveToken(accessToken);
    deleteToken();

    const savedToken = localStorage.getItem('accessToken');

    expect(savedToken).toBeNull();
  });

  it('get current accessToken', () => {
    const accessToken = 'TESTACCESSTOKEN';

    saveToken(accessToken);

    const savedToken = getToken();

    expect(savedToken).toBe(accessToken);
  });
});
