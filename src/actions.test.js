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
    });
  });

  describe('requestLogin', () => {
    context('with loginFields', () => {
      const loginFields = {
        email: 'tester@example.com',
        password: 'test',
      };

      beforeEach(() => {
        store = mockStore({ loginFields });
      });

      it('dispatchs setAccessToken', async () => {
        await store.dispatch(requestLogin(loginFields));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken(''));
      });
    });
  });

  describe('sendReview', () => {
    context('with reviewFields, accessToken and restaurantId', () => {
      const reviewFields = {
        score: '5',
        description: 'Good!',
      };

      const accessToken = 'ACCESS_TOKEN';
      const restaurantId = 1;

      beforeEach(() => {
        store = mockStore({
          reviewFields,
          accessToken,
          restaurantId,
        });
      });

      it('runs postReview', async () => {
        await store.dispatch(sendReview({ restaurantId }));
        // TODO: postReview가 실행된걸 어떻게 알 수 있는가.
      });
    });
  });
});
