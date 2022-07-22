import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  setAccessToken,
} from './actions';

import {
  loadInitialData,
  loadRestaurants,
  loadRestaurant,
  requestLogin,
  sendReview,
} from './async-actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/services/api');

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

      it("does'nt run any actions", async () => {
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

      it("does'nt run any actions", async () => {
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
    context('with all login fields', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: 'abc@test.com',
            password: 'password123',
          },
        });
      });

      it('dispatchs setAccessToken', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken(''));
      });
    });

    context('without email', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: '',
            password: 'password123',
          },
        });
      });

      it("doesn't run any actions", async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without password', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: 'abc@test.com',
            password: '',
          },
        });
      });

      it("doesn't run any actions", async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  describe('sendReview', () => {
    const restaurantId = 6;

    context('with all login fields', () => {
      beforeEach(() => {
        store = mockStore({
          reviewFields: {
            score: '9',
            description: '정말 맛있어요!',
          },
        });
      });
    });

    context('without score', () => {
      beforeEach(() => {
        store = mockStore({
          reviewFields: {
            score: '',
            description: '정말 맛있어요!',
          },
        });
      });

      it("doesn't run any actions", async () => {
        await store.dispatch(sendReview({ restaurantId }));

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without description', () => {
      beforeEach(() => {
        store = mockStore({
          reviewFields: {
            score: '9',
            description: '',
          },
        });
      });

      it("doesn't run any actions", async () => {
        await store.dispatch(sendReview({ restaurantId }));

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
