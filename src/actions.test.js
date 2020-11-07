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
  changeLoginField,
  setAccessToken,
  setReviews,
  logout,
  requestLogin,
  sendReview,
} from './actions';

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

    it('dispatchs setRestaurant', async () => {
      await store.dispatch(loadRestaurant({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));

      expect(actions[2]).toEqual(setReviews({}));
    });
  });

  describe('changeLoginField', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: {
          email: '',
          password: '',
        },
      });
    });

    it('dispatchs changeLoginField', async () => {
      await store.dispatch(changeLoginField({ name: 'email', value: ' test@test' }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(changeLoginField({ name: 'email', value: ' test@test' }));
    });
  });

  describe('setAccessToken', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: '',
      });
    });

    it('dispatchs setAccessToken', async () => {
      const accessToken = 'ACCESS_TOKEN';

      await store.dispatch(setAccessToken(accessToken));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken(accessToken));
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: 'ACCESS_TOKEN',
      });
    });
    it('dispatchs logout', async () => {
      await store.dispatch(logout());

      const actions = store.getActions();

      expect(actions[0]).toEqual(logout());
    });
  });

  describe('requestLogin', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: {
          email: 'test@test',
          password: '1234',
        },
      });
    });
    it('dispatchs setAccessToken', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual({ payload: { accessToken: {} }, type: 'setAccessToken' });
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      store = mockStore({
        reviewFields: {
          score: '5',
          description: 'GOOD',
        },
      });
    });
    it('dispatchs setAccessToken', async () => {
      await store.dispatch(sendReview({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual({ payload: { reviews: undefined }, type: 'setReviews' });
    });
  });
});
