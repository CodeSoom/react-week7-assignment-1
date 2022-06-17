export const authState = {
  loginFields: {
    email: '',
    password: '',
  },
  auth: {
    accessToken: null,
    isLoading: false,
    isError: false,
    isLogin: false,
    errorMessage: '',
  },
};

export const authReducer = {
  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      auth: {
        ...state.auth,
        accessToken,
        isLoading: false,
        isError: false,
        errorMessage: '',
      },
    };
  },

  setLoginFields(state, { payload: { name, value } }) {
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        [name]: value,
      },
    };
  },
};