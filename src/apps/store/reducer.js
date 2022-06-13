import { equal } from '../utils';

const initialState = {
  regions: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    data: [],
  },
  categories: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    data: [],
  },
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
  selectedRegion: null,
  selectedCategory: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const reducers = {
  setRegions(state, {
    payload: {
      regions, key, isLoading, isError, errorMessage,
    },
  }) {
    return {
      ...state,
      regions,
      [key]: {
        ...state[key],
        isLoading,
        isError,
        errorMessage,
        data: regions,
      },
    };
  },

  setCategories(state, {
    payload: {
      categories, key, isLoading, isError, errorMessage,
    },
  }) {
    return {
      ...state,
      [key]: {
        ...state[key],
        isLoading,
        isError,
        errorMessage,
        data: categories,
      },
    };
  },

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

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.data.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.data.find(equal('id', categoryId)),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action?.type] || defaultReducer)(state, action);
}
