import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: {
    reviews: [],
  },
  selectedRegion: null,
  selectedCategory: null,
  accessToken: '',
  loginFields: {
    email: '',
    password: '',
  },
  reviewField: {
    score: '',
    description: '',
  },
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

  logout(state) {
    return {
      ...state,
      accessToken: '',
    };
  },

  changeLoginField(state, { payload: { name, value } }) {
    const { loginFields } = state;
    loginFields[name] = value;

    return {
      ...state,
      loginFields,
    };
  },

  setReviews(state, { payload: { reviews } }) {
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        reviews,
      },
    };
  },

  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
    };
  },

  changeReviewField(state, { payload: { name, value } }) {
    const { reviewField } = state;
    reviewField[name] = value;

    return {
      ...state,
      reviewField,
    };
  },

  clearReviewFields(state) {
    return {
      ...state,
      reviewField: {
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
