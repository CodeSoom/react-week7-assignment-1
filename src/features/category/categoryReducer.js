import { equal } from '../../apps/utils';

export const categoryState = {
  categories: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    data: [],
  },
  selectedCategory: null,
};

export const categoryReducers = {
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

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.data.find(equal('id', categoryId)),
    };
  },
};
