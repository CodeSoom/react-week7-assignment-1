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
  requestLogout,
  setAccessToken,
  registerReview,
} from './actions';

import { saveItem, removeItem } from './services/storage';

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
      saveItem.mockClear();
      store = mockStore({
        loginFields: {
          email: 'test@test.com',
          password: 'password!',
        },
      });
    });

    it('requests login', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(saveItem).toBeCalledWith('accessToken', '');
      expect(actions[0]).toEqual(setAccessToken(''));
    });
  });

  describe('requestLogout', () => {
    beforeEach(() => {
      removeItem.mockClear();
      store = mockStore({
        accessToken: 'ACCESS_TOKEN',
      });
    });

    it('requests logout', async () => {
      await store.dispatch(requestLogout());

      const actions = store.getActions();

      expect(removeItem).toBeCalledWith('accessToken');
      expect(actions[0]).toEqual(setAccessToken(''));
    });
  });

  describe('registerReview', () => {
    beforeEach(() => {
      store = mockStore({
        reviewFields: {
          score: '5',
          description: '맛있어요',
        },
        accessToken: 'ACCESS_TOKEN',
      });
    });

    it('register review', async () => {
      await store.dispatch(registerReview());

      const actions = store.getActions();

      expect(actions[0]).toEqual(loadRestaurant());
    });
  });
});
