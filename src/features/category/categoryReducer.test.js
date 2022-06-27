import reducer from '../../apps/store/reducer';

import { selectCategory, setCategories } from './categoryActions';

describe('categoryReducers', () => {
  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories.data).toHaveLength(1);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: {
          data: [
            { id: 1, name: '한식' },
          ],
        },
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });
});
