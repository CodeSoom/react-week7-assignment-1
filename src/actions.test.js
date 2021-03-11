import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  requestLogin,
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  loadRestaurant,
  setRestaurants,
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
    context('새로운 레스토랑의 정보를 받아야 할 때', () => {
      beforeEach(() => {
        store = mockStore({});
      });

      it('dispatchs setRestaurant twice', async () => {
        await store.dispatch(loadRestaurant({ restaurantId: 1 }));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'setRestaurant',
          payload: { restaurant: null },
        });
        expect(actions[1]).toEqual({
          type: 'setRestaurant',
          payload: { restaurant: {} },
        });
      });
    });

    context('기존의 레스토랑 정보를 다시 받아야 할 때', () => {
      beforeEach(() => {
        store = mockStore({
          restaurant: { id: 1 },
        });
      });

      it('dispatchs setRestaurant only one time', async () => {
        await store.dispatch(loadRestaurant({ restaurantId: 1 }));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'setRestaurant',
          payload: { restaurant: {} },
        });
      });
    });
  });

  describe('requestLogin', () => {
    beforeEach(() => {
      store = mockStore({ userLoginInputs: { email: 'test@naver.com', password: 'test' } });
    });

    it('accessToken을 저장하는 action을 실행한다.', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual(
        {
          type: 'setAccessToken',
          payload: { accessToken: 'ACCESS_TOKEN' },
        },
      );
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: 'ACCESS_TOKEN',
        review: { score: '5', description: '요리 고수~' },
      });
    });

    it('리뷰를 post하고 그 후 다시 레스토랑 정보를 가져오는 action을 실행한다.', async () => {
      await store.dispatch(sendReview({ restaurantId: '1' }));

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'setRestaurant',
        payload: { restaurant: null },
      });
      expect(actions[1]).toEqual({
        type: 'setRestaurant',
        payload: { restaurant: {} },
      });
    });
  });
});
