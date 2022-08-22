import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  accessToken: null,
  loginFields: {
    email: '',
    password: '',
  },
  reviewFields: {
    score: '',
    description: '',
  },
  reviews: [],
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
    return {
      ...state,
      reviews: [...reviews],
    };
  },

  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
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
    return {
      ...state,
      loginFields: {
        ...loginFields,
        [name]: value,
      },
    };
  },

  changeReviewField(state, { payload: { name, value } }) {
    const { reviewFields } = state;
    return {
      ...state,
      reviewFields: {
        ...reviewFields,
        [name]: value,
      },
    };
  },

  clearAccessToken(state) {
    return {
      ...state,
      accessToken: null,
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
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
