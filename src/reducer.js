import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  token: '',
  selectedRegion: null,
  selectedCategory: null,
  inputField: {
    email: '',
    password: '',
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

  setToken(state, { payload: { token } }) {
    return {
      ...state,
      token,
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
        ...state.inputField, // const {inpuField} = state 대신 사용하는 것인지?
        [name]: value, // 형식을 이해하기 위해서 모던 자바스크립트 튜토리얼에서 어떤 부분을 참고하면 될지?
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
