import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  loadRestaurants,
  loadRestaurant,
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

      expect(actions).toEqual([
        {
          type: 'setRegions',
          payload: { regions: [] },
        },
        {
          type: 'setCategories',
          payload: { categories: [] },
        },
      ]);
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

        expect(actions[0]).toEqual({
          type: 'setRestaurants',
          payload: { restaurants: [] },
        });
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

      expect(actions).toEqual([
        {
          type: 'setRestaurant',
          payload: { restaurant: null },
        },
        {
          type: 'setRestaurant',
          payload: { restaurant: {} },
        },
      ]);
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

      expect(actions[0]).toEqual({
        type: 'setAccessToken',
        payload: { accessToken: '' },
      });
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      store = mockStore({
        reviewField: {
          score: '5',
          description: '맛점 장소로 딱!',
        },
      });
    });

    it('run postReview', async () => {
      await store.dispatch(sendReview({ restaurantId: 1 }));
    });

    it('dispatches setRestarant actions', async () => {
      await store.dispatch(sendReview({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions).toEqual([
        {
          type: 'setRestaurant',
          payload: { restaurant: null },
        },
        {
          type: 'setRestaurant',
          payload: { restaurant: {} },
        },
      ]);
    });
  });
});
