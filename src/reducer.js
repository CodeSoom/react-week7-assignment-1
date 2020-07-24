import { equal } from './utils';

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
  accessToken: '',
  loginFields: {
    email: '',
    password: '',
  },
  reviewFields: {
    ...initialReviewFields,
  },
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
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

  changeLoginFields(state, { payload: { name, value } }) {
    const { loginFields } = state;
    return {
      ...state,
      loginFields: {
        ...loginFields,
        [name]: value,
      },
    };
  },

  changeReviewFields(state, { payload: { name, value } }) {
    const { reviewFields } = state;
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
        ...initialReviewFields,
      },
    };
  },

  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
    };
  },

  logout(state) {
    return {
      ...state,
      accessToken: '',
    };
  },

  setReviews(state, { payload: { reviews } }) {
    const { restaurant } = state;
    return {
      ...state,
      restaurant: {
        ...restaurant,
        reviews,
      },
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
