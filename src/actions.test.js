import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { loadItem } from './services/storage';

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  loadRestaurant,
  setRestaurants,
  setRestaurant,
  requestLogin,
  sendReview,
  loadLoginStatus,
  logout,
} from './actions';

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

  describe('requestLogin', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: { email: 'email', password: 'password' },
      });
    });

    it('dispatches setAccessToken', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'setAccessToken',
        payload: { accessToken: '' },
      });
    });
  });

  describe('loadLoginStatus', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: null,
      });
    });

    context('when accessToken is in storage', () => {
      beforeEach(() => {
        loadItem.mockImplementation(() => 'ACCESS_TOKEN');
      });

      it('dispatches setAccessToken', async () => {
        await store.dispatch(loadLoginStatus());

        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'setAccessToken',
          payload: { accessToken: 'ACCESS_TOKEN' },
        });
      });
    });

    context('when accessToken is not in storage', () => {
      beforeEach(() => {
        loadItem.mockImplementation(() => null);
      });

      it('dispatches nothing', async () => {
        await store.dispatch(loadLoginStatus());

        const actions = store.getActions();

        expect(actions).toEqual([]);
      });
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: 'ACCESS_TOKEN',
      });
    });

    it('dispatches setAccessToken', async () => {
      await store.dispatch(logout());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'setAccessToken',
        payload: { accessToken: null },
      });
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      store = mockStore({
        restaurant: { restauantId: 1 },
        reviewFields: { rate: '3', description: '맛있네요' },
      });
    });

    it('dispatches addReview', async () => {
      await store.dispatch(sendReview());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'addReview',
        payload: { review: {} },
      });
    });
  });
});
