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
  requestLogin,
  setAccessToken,
  requestReview,
  addReview,
} from './actions';
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
      expect(actions[1]).toEqual(setRestaurant({ restaurantId: 1 }));
    });
  });

  describe('requestLogin', () => {
    context('when loginFields are empty', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: '',
            password: '',
          },
        });
      });

      it('does\'nt run any actions', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  context('when loginFields are existed', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: {
          email: 'test@test.com',
          password: '1234',
        },
      });
    });

    it('dispatchs setAccessToken', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken({ accessToken: 'ACCESS_TOKEN' }));
    });
  });

  describe('postReview', () => {
    context('when reviewFields are empty', () => {
      beforeEach(() => {
        store = mockStore({
          reviewFields: {
            score: '',
            description: '',
          },
        });
      });

      it('does\'nt run any actions', async () => {
        await store.dispatch(requestReview());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  context('when reviewFields are not empty', () => {
    beforeEach(() => {
      store = mockStore({
        reviewFields: {
          score: '5',
          description: 'Nice!',
        },
      });
    });

    it('dispatchs setAccessToken', async () => {
      await store.dispatch(requestReview());

      const actions = store.getActions();

      expect(actions[0]).toEqual(addReview({ score: '5', description: 'Nice!' }));
    });
  });
});
