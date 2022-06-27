import { setError, setLoading } from '../../apps/store/actions';

import fetchCategories from './categoryApi';

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
      key: 'categories',
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: { categoryId },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    try {
      dispatch(setLoading('categories', true));

      const categories = await fetchCategories();
      dispatch(setCategories(categories));
    } catch (error) {
      dispatch(setError('categories', error.message));
    }
  };
}
