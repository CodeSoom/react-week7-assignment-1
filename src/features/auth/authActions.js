import { setError, setLoading } from '../../apps/store/actions';

import { authorize } from './authApi';

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: {
      isLoading: false,
      isError: false,
      isLogin: true,
      errorMessage: '',
      accessToken,
    },
  };
}

export function setLoginFields(name, value) {
  return {
    type: 'setLoginFields',
    payload: {
      name,
      value,
    },
  };
}

export function login() {
  return async (dispatch, getState) => {
    try {
      const { loginFields: { email, password } } = getState();
      if (!(email && password)) {
        return;
      }

      dispatch(setLoading('auth', true));

      const { accessToken } = await authorize(email, password);
      dispatch(setAccessToken(accessToken));
    } catch (error) {
      dispatch(setError('auth', error.message));
    }
  };
}
