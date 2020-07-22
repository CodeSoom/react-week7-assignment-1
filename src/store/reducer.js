import { equal } from '../utils';

export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  selectedRestaurant: null,
  session: {
    input: {
      email: '',
      password: '',
    },
    accessToken: null,
  },
  review: {
    input: {
      score: '',
      description: '',
    },
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

  setRestaurant(state, { payload: { restaurant } }) {
    return {
      ...state,
      restaurant,
    };
  },

  setSessionInput(state, { payload: { sessionInput } }) {
    return {
      ...state,
      session: {
        ...state.session,
        input: {
          ...state.session.input,
          ...sessionInput,
        },
      },
    };
  },

  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      session: {
        ...state.session,
        accessToken,
      },
    };
  },

  setReviewInput(state, { payload: { reviewInput } }) {
    return {
      ...state,
      review: {
        ...state.review,
        input: {
          ...state.review.input,
          ...reviewInput,
        },
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
