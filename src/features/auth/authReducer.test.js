import reducer from '../../apps/store/reducer';

import { logout, setAccessToken, setLoginFields } from './authActions';

describe('authReducer', () => {
  describe('setAccessToken', () => {
    it('set accessToken and initialize status', () => {
      const initialState = {
        auth: {
          accessToken: null,
          isLoading: false,
          isError: false,
          errorMessage: '',
        },
      };

      const state = reducer(initialState, setAccessToken('accessToken'));

      expect(state.auth.accessToken).toBe('accessToken');
    });
  });

  describe('logout', () => {
    it('initialize auth state', () => {
      const initialState = {
        auth: {
          accessToken: 'accessToken',
          isLoading: false,
          isError: false,
          isLogin: true,
          errorMessage: '',
        },
      };

      const state = reducer(initialState, logout());

      expect(state.auth.accessToken).toBeNull();
    });
  });

  describe('setLoginFields', () => {
    it('change login field', () => {
      const initialState = {
        loginFields: {
          email: '',
          password: '',
        },
      };

      const state = reducer(initialState, setLoginFields('email', 'tester@example.com'));

      expect(state.loginFields.email).toBe('tester@example.com');
    });
  });
});
