import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { setRegions, loadRegions } from './regionActions';

import fetchRegions from './regionApi';

import regions from '../../../fixtures/regions';
import { setError } from '../../apps/store/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./regionApi');

describe('loadRegions', () => {
  let store;

  context('with fetching regions', () => {
    beforeEach(() => {
      store = mockStore({
        regions: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      });
      fetchRegions.mockResolvedValue(regions);
    });

    it('runs setRegions', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[1]).toEqual(setRegions(regions));
    });
  });

  context('with error', () => {
    beforeEach(() => {
      store = mockStore({
        regions: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      });
      fetchRegions.mockRejectedValue(new Error('error'));
    });

    it('runs setError', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[1]).toEqual(setError('regions', 'error'));
    });
  });
});
