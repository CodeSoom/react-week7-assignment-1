import { equal } from '@/utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {
    email: '',
    password: '',
  },
  reviewFields: {
    score: '',
    description: '',
  },
  accessToken: '',
  loginError: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },

  setRestaurant(state, { payload: { restaurant } }) {
    return {
      ...state,
      restaurant,
    };
  },

  setReviews(state, { payload: { reviews } }) {
    const { restaurant } = state;

    if (!restaurant) {
      return state;
    }

    return {
      ...state,
      restaurant: {
        ...restaurant,
        reviews,
      },
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },

  changeLoginField(state, { payload: { name, value } }) {
    const { loginFields } = state;

    if (!(name in loginFields)) {
      return state;
    }

    return {
      ...state,
      loginFields: {
        ...loginFields,
        [name]: value,
      },
    };
  },

  clearLoginFields(state) {
    return {
      ...state,
      loginFields: {
        email: '',
        password: '',
      },
    };
  },

  changeReviewField(state, { payload: { name, value } }) {
    const { reviewFields } = state;

    if (!(name in reviewFields)) {
      return state;
    }

    return {
      ...state,
      reviewFields: {
        ...reviewFields,
        [name]: value,
      },
    };
  },

  clearReviewFields(state) {
    return {
      ...state,
      reviewFields: {
        score: '',
        description: '',
      },
    };
  },

  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
    };
  },

  setLoginError(state, { payload: { loginError } }) {
    return {
      ...state,
      loginError,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
