import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  loadRestaurant,
  setRestaurants,
  requestLogin,
  sendReview,
} from './actions';

import { postLogin } from './services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

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

    it('runs setRestaurant', async () => {
      await store.dispatch(loadRestaurant({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions).toEqual([
        {
          type: 'setRestaurant',
          payload: {
            restaurant: null,
          },
        },
        {
          type: 'setRestaurant',
          payload: {
            restaurant: {},
          },
        },
      ]);
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      store = mockStore({
        reviewFields: {
          score: '5',
          description: 'good',
        },
      });
    });

    it('dispatchs addRestaurantReview', async () => {
      const restaurantId = 1;
      await store.dispatch(sendReview(restaurantId));

      const actions = store.getActions();

      expect(actions).toEqual([{
        type: 'addRestaurantReview',
        payload: {
          review: {
            score: '5',
            description: 'good',
          },
        },
      }]);
    });
  });

  describe('requestLogin', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      store = mockStore({
        loginFields: {
          email: 'tester@example.com',
          password: 'test',
        },
      });

      postLogin.mockResolvedValue('ACCESS_TOKEN');
    });

    context('without error', () => {
      it('runs setAccessToken', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions).toEqual([{
          type: 'setAccessToken',
          payload: {
            accessToken: 'ACCESS_TOKEN',
          },
        }]);
      });
    });

    context('with error', () => {
      beforeEach(() => {
        jest.clearAllMocks();

        store = mockStore({
          loginFields: {
            email: 'tester@example.com',
            password: 'test',
          },
        });

        postLogin.mockRejectedValue('error');
      });

      it('runs requestLoginError', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions).toEqual([{
          type: 'requestLoginError',
        }]);
      });
    });
  });
});
