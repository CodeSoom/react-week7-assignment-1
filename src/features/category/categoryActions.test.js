import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { setCategories, loadCategories } from './categoryActions';

import fetchCategories from './categoryApi';

import categories from '../../../fixtures/categories';

import { setError } from '../../apps/store/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./categoryApi');

describe('loadCategories', () => {
  let store;

  context('with fetching categories', () => {
    beforeEach(() => {
      store = mockStore({
        categories: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      });
      fetchCategories.mockResolvedValue(categories);
    });

    it('runs setCategories', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[1]).toEqual(setCategories(categories));
    });
  });

  context('with error', () => {
    beforeEach(() => {
      store = mockStore({
        categories: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      });
      fetchCategories.mockRejectedValue(new Error('error'));
    });

    it('runs setError', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[1]).toEqual(setError('categories', 'error'));
    });
  });
});
