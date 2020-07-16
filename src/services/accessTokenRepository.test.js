import { saveToken } from './accessTokenRepository';

describe('accessTokenRepository', () => {
  it('save the accessToken', () => {
    const accessToken = 'TESTACCESSTOKEN';

    saveToken(accessToken);

    const savedToken = localStorage.getItem('accessToken');

    expect(savedToken).toBe(accessToken);
  });
});
