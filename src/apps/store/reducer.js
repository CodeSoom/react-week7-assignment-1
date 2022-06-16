import { regionState, regionReducers } from '../../features/region/regionReducer';
import { categoryState, categoryReducers } from '../../features/category/categoryReducer';

const initialState = {
  ...regionState,
  ...categoryState,
  restaurants: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    data: [],
  },
  restaurantDetail: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    data: {},
  },
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

const reducers = {
  ...regionReducers,
  ...categoryReducers,
  setRestaurants(state, {
    payload: {
      restaurants, key, isLoading, isError, errorMessage,
    },
  }) {
    return {
      ...state,
      [key]: {
        ...state[key],
        isLoading,
        isError,
        errorMessage,
        data: restaurants,
      },
    };
  },

  setRestaurantDetail(state, {
    payload: {
      key, restaurantDetail, isLoading, isError, errorMessage,
    },
  }) {
    return {
      ...state,
      [key]: {
        ...state[key],
        isLoading,
        isError,
        errorMessage,
        data: restaurantDetail,
      },
    };
  },

  setLoading(state, {
    payload: {
      key, isLoading, isError, errorMessage,
    },
  }) {
    return {
      ...state,
      [key]: {
        ...state[key],
        isLoading,
        isError,
        errorMessage,
      },
    };
  },

  setError(state, {
    payload: {
      key, isLoading, isError, errorMessage,
    },
  }) {
    return {
      ...state,
      [key]: {
        ...state[key],
        isLoading,
        isError,
        errorMessage,
      },
    };
  },

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

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action?.type] || defaultReducer)(state, action);
}
