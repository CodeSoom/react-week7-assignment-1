import reducer from '../../apps/store/reducer';

import { setAccessToken, setLoginFields } from './authActions';

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
