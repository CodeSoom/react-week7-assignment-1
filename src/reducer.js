// ToDo 비슷한 기능끼리 정렬해서 정리하기
import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  accessToken: '',
  selectedRegion: null,
  selectedCategory: null,
  inputField: {
    email: '',
    password: '',
  },
  reviewField: {
    score: '',
    description: '',
  },
  review: '',
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

  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
    };
  },

  setReview(state, { payload: { review } }) {
    return {
      ...state,
      review,
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

  changeInputField(state, { payload: { name, value } }) {
    return {
      ...state,
      inputField: {
        ...state.inputField,
        [name]: value,
      },
    };
  },

  changeReviewField(state, { payload: { name, value } }) {
    return {
      ...state,
      reviewField: {
        ...state.reviewField,
        [name]: value,
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
