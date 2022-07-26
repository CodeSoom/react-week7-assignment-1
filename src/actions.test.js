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
  setAccessToken,
  clearLoginFields,
  requestLogin,
  requestLogout,
  clearReviewFields,
  addReview,
  setError,
} from './actions';

import { postLogin } from './services/api';

import { saveItem } from './storage';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');
jest.mock('./storage');

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
    context('with valid login fields', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: 'tester@example.com',
            password: 'test',
          },
        });

        postLogin.mockResolvedValue('');

        saveItem.mockClear();
      });

      it('dispatchs setAccessToken', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(saveItem).toBeCalledWith('accessToken', '');

        expect(actions[0]).toEqual(setAccessToken(''));
        expect(actions[1]).toEqual(clearLoginFields());
      });
    });

    context('with invalid login fields', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: 'invalid@invalid.com',
            password: 'invalid',
          },
        });

        postLogin.mockRejectedValue(new Error('로그인에 실패했습니다.'));
      });

      it('dispatchs setError', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setError({
          name: 'login',
          error: '로그인에 실패했습니다.',
        }));
      });
    });
  });

  describe('requestLogout', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: 'ACCESS_TOKEN',
      });
    });

    it('dispatches setAccessToken', () => {
      store.dispatch(requestLogout());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken(''));
    });
  });

  describe('addReview', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: 'ACCESS_TOKEN',
        reviewFields: {
          score: '5',
          description: 'Good!',
        },
      });
    });

    it('calls clearReviewFields', async () => {
      await store.dispatch(addReview({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(clearReviewFields());
      expect(actions[1]).toEqual(setRestaurant(null));
      expect(actions[2]).toEqual(setRestaurant({}));
    });
  });
});
