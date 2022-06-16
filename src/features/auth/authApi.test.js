import mockAxios from 'jest-mock-axios';

import {
  authorize,
} from './authApi';

jest.mock('axios');

describe('api', () => {
  const mockLogin = (data) => mockAxios.post.mockResolvedValue({ data, status: 201 });
  const mockLoginError = (data) => mockAxios.post.mockResolvedValue({ data, status: 400 });

  describe('with success', () => {
    beforeEach(() => {
      mockLogin({
        accessToken: 'accessToken',
      });
    });

    it('returns accessToken', async () => {
      const response = await authorize('tester@example.com', 'test');

      expect(response.accessToken).toEqual('accessToken');
    });
  });

  describe('with failure', () => {
    beforeEach(() => {
      mockLoginError({
        message: 'Invalid email or password',
      });
    });

    it('returns error message', async () => {
      const response = await authorize('tester@example.com', 'test');

      expect(response.message).toEqual('Invalid email or password');
    });
  });
});
