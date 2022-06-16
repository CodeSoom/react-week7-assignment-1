import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadRestaurants,
  setRestaurants,
  loadRestaurantDetail,
  setRestaurantDetail,
  setError,
  setAccessToken,
  login,
} from './actions';

import {
  authorize, fetchRestaurantById, fetchRestaurants,
} from '../services/api';

import restaurants from '../../../fixtures/restaurants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');
jest.mock('../../features/region/regionApi.js');

describe('actions', () => {
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

  describe('login', () => {
    context('with valid credentials', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: 'tester@example.com',
            password: 'test',
          },
        });
        authorize.mockResolvedValue({
          accessToken: 'accessToken',
        });
      });

      it('runs setAccessToken', async () => {
        await store.dispatch(login());

        const actions = store.getActions();

        expect(actions[1]).toEqual(setAccessToken('accessToken'));
      });
    });
  });
});
