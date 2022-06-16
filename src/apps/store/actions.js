import { authorize } from '../services/api';

export function setLoading(key, isLoading) {
  return {
    type: 'setLoading',
    payload: {
      key,
      isLoading,
      isError: false,
      errorMessage: '',
    },
  };
}

export function setError(key, errorMessage) {
  return {
    type: 'setError',
    payload: {
      key,
      isLoading: false,
      isError: true,
      errorMessage,
    },
  };
}

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
