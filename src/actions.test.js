import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  requestLogin,
  setAccessToken,
  logout,
  sendReview,
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  loadRestaurant,
  setRestaurants,
  setRestaurant,
  changeReviewField,
} from './actions';

import { saveItem, removeItem } from './services/storage';

import accessToken from '../fixtures/accessToken';

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
      await store.dispatch(loadRestaurant({}));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });

  describe('requestLogin', () => {
    const loginFields = {
      email: 'tester@exmaple.com',
      password: 'test',
    };

    beforeEach(() => {
      store = mockStore({ loginFields });

      saveItem.mockImplementation(() => null);
    });

    it('dispatchs setAccessToken', async () => {
      await store.dispatch(requestLogin(accessToken));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken(accessToken));

      expect(saveItem).toBeCalledTimes(1);
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: 'US3R_T@KEN',
      });

      removeItem.mockClear();
    });

    it('requests logout', async () => {
      await store.dispatch(logout());

      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: 'logout' });

      expect(removeItem).toBeCalledWith('accessToken');
    });
  });

  describe('sendReview', () => {
    const reviewData = {
      restaurantId: 100,
      accessToken: 'US3R_T@KEN',
      reviewFields: {
        score: 5,
        description: '숨은맛집을찾아버렸다아',
      },
    };

    beforeEach(() => {
      store = mockStore(reviewData);
    });

    it('post review', async () => {
      await store.dispatch(sendReview({ restaurantId: 100 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(changeReviewField({ name: 'score', value: '' }));
      expect(actions[2]).toEqual(changeReviewField({ name: 'description', value: '' }));
    });
  });
});
