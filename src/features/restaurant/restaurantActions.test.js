import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import restaurants from '../../../fixtures/restaurants';

import { fetchRestaurantById, fetchRestaurants } from './restaurantApi';

import {
  loadRestaurantDetail, loadRestaurants, setRestaurantDetail, setRestaurants,
} from './restaurantActions';

import { setError } from '../../apps/store/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./restaurantApi');

describe('restaurantActions', () => {
  let store;

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
          restaurants: {
            isLoading: false,
            isError: false,
            errorMessage: '',
            data: [],
          },
        });
        fetchRestaurants.mockResolvedValue(restaurants);
      });

      it('runs setRestaurants', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[1]).toEqual(setRestaurants(restaurants));
      });
    });

    context('without selectedRegion', () => {
      beforeEach(() => {
        store = mockStore({
          selectedCategory: { id: 1, name: '한식' },
        });
      });

      it('does\'nt run any actions', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without selectedCategory', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
        });
      });

      it('does\'nt run any actions', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
    context('with error', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
          restaurants: {
            isLoading: false,
            isError: false,
            errorMessage: '',
            data: [],
          },
        });
        fetchRestaurants.mockRejectedValue(new Error('error'));
      });

      it('runs setError', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[1]).toEqual(setError('restaurants', 'error'));
      });
    });
  });

  describe('loadRestaurantDetail', () => {
    context('with selectedRestaurantId', () => {
      beforeEach(() => {
        store = mockStore({
          restaurantDetail: {
            isLoading: false,
            isError: false,
            errorMessage: '',
            data: {},
          },
        });
        fetchRestaurantById.mockResolvedValue(
          {
            id: 1,
            categoryId: 1,
            name: '양천주가',
            address: '서울 강남구 123456',
            menuItems: [
              {
                id: 1,
                restaurantId: 1,
                name: '비빔밥',
              },
            ],
          },
        );
      });
      it('runs setRestaurantDetail', async () => {
        await store.dispatch(loadRestaurantDetail(1));

        const actions = store.getActions();

        expect(actions[1]).toEqual(setRestaurantDetail({
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          menuItems: [
            {
              id: 1,
              restaurantId: 1,
              name: '비빔밥',
            },
          ],
        }));
      });
    });

    context('without selectedRestaurantId', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRestaurantId: null,
        });
      });

      it("doesn't run any actions", async () => {
        await store.dispatch(loadRestaurantDetail());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('with error', () => {
      beforeEach(() => {
        store = mockStore({
          restaurantDetail: {
            isLoading: false,
            isError: false,
            errorMessage: '',
            data: {},
          },
        });
        fetchRestaurantById.mockRejectedValue(new Error('error'));
      });

      it('runs setError', async () => {
        await store.dispatch(loadRestaurantDetail(1));

        const actions = store.getActions();

        expect(actions[1]).toEqual(setError('restaurantDetail', 'error'));
      });
    });
  });
});
