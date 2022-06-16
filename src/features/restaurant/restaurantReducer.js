export const restaurantState = {
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
};

export const restaurantReducer = {
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
};
