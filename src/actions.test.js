import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  loadRestaurant,
  sendReview,
  requestLogin,
  setRestaurants,
  setRestaurant,
  setAccessToken,
  setErrorMessage,
} from './actions';

import { postLogin, postReview } from './services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');
jest.mock('./services/storage');
jest.mock('axios');

describe('actions', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
  });

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
        loginFields: {
          email: 'tester@example.com',
          password: 'test',
        },
      });
    });

    context('when the request succeeded', () => {
      it('dispatchs setAccessToken', async () => {
        postLogin.mockImplementation(() => 'TOKEN');

        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken('TOKEN'));
      });
    });

    context('when the request failed from api', () => {
      it('dispatchs setErrorMessage', async () => {
        postLogin.mockImplementation(() => '');

        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setErrorMessage('로그인 정보를 다시 입력해 주세요.'));
      });
    });

    context('when the request failed from action', () => {
      it('dispatchs setErrorMessage', async () => {
        postLogin.mockImplementation(() => {
          throw new Error('Error');
        });

        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setErrorMessage('Error'));
      });
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      store = mockStore({
        reviewFields: {
          score: 5,
          description: '최고예요',
        },
      });
    });

    it('dispatchs loadRestaurant', async () => {
      await store.dispatch(sendReview({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
    });

    context('when the request failed', () => {
      it('dispatchs setErrorMessage', async () => {
        postReview.mockImplementation(() => {
          throw new Error('Error');
        });

        await store.dispatch(sendReview({ restaurantId: 1 }));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setErrorMessage('Error'));
      });
    });
  });
});
