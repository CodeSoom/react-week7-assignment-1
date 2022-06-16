import { regionState, regionReducers } from '../../features/region/regionReducer';

import { categoryState, categoryReducers } from '../../features/category/categoryReducer';

import { restaurantState, restaurantReducer } from '../../features/restaurant/restaurantReducer';

import { authState, authReducer } from '../../features/auth/authReducer';

const initialState = {
  ...regionState,
  ...categoryState,
  ...restaurantState,
  ...authState,
};

const reducers = {
  ...regionReducers,
  ...categoryReducers,
  ...restaurantReducer,
  ...authReducer,

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

};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action?.type] || defaultReducer)(state, action);
}
