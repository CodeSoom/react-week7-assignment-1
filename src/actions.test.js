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
  createToken,
  setAccessToken,
  changeLoginFields,
} from './actions';

import accessTokenFixture from '../fixtures/accessToken';

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
    });
  });

  describe('createToken', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: {
          email: 'tester@example.com',
          password: 'password',
        },
      });
    });

    it('dispatches setAccessToken and setLoginFields', async () => {
      await store.dispatch(createToken(accessTokenFixture));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken(accessTokenFixture));
      expect(actions[1]).toEqual(changeLoginFields({ name: 'email', value: '' }));
      expect(actions[2]).toEqual(changeLoginFields({ name: 'password', value: '' }));
    });

    it('set acessToken to local storage', async () => {
      await store.dispatch(createToken(accessTokenFixture));

      expect(localStorage.getItem('accessToken')).toBe('TESTACESSTOKEN');
    });
  });
});
