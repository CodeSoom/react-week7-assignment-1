import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  loginForm: { id: '', pw: '' },
  reviewForm: { score: 0, name: '', description: '' },
  accessToken: '',
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

  handleLoginForm(state, { payload: { key, value } }) {
    const { loginForm } = state;
    return {
      ...state,
      loginForm: { ...loginForm, [key]: value },
    };
  },
  handleReviewForm(state, { payload: { key, value } }) {
    const { reviewForm } = state;
    return {
      ...state,
      reviewForm: { ...reviewForm, [key]: value },
    };
  },
  resetReviwForm(state) {
    return {
      ...state,
      reviewForm: { score: 0, name: '', description: '' },
    };
  },
  setAccessToken(state, { payload: { token } }) {
    return {
      ...state,
      accessToken: token,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
