import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  loadRestaurant,
  setRestaurants,
  setRestaurant,
  requestSession,
  setAccessToken,
  submitReview,
} from './actions';

import RESTAURANT from '../fixtures/restaurant';

import { saveItem } from './services/storage';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');
jest.mock('./services/storage');

describe('actions', () => {
  let store;

  describe('loadInitialData', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setRegions and setCategories', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
      expect(actions[1]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
        });
      });

      it('runs setRestaurants', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
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
  });

  describe('loadRestaurant', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs setRestaurant', async () => {
      await store.dispatch(loadRestaurant({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });

  describe('requestSession', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: {
          email: 'tester@example.com',
          password: 'tester',
        },
      });
    });

    it('dispatchs requrestSession', async () => {
      await store.dispatch(requestSession());

      const actions = store.getActions();

      expect(actions).toEqual([setAccessToken({ accessToken: 'ACCESS_TOKEN' })]);
    });

    it('calls setItem for storage access token', async () => {
      await store.dispatch(requestSession());

      expect(saveItem).toBeCalledWith('accessToken', 'ACCESS_TOKEN');
    });
  });

  describe('submitReView', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: 'ACCESS_TOKEN',
        reviewFields: {
          score: '5',
          description: '훌륭하다 훌륭해!',
        },
        restaurant: RESTAURANT,
      });
    });

    it('dispatchs submitReview', async () => {
      await store.dispatch(submitReview());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant({
        ...RESTAURANT,
        reviews: [
          {
            id: 2, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭해!',
          },
          ...RESTAURANT.reviews,
        ],
      }));
    });
  });
});
