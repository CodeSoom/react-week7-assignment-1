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
  setAccessToken,
  logout,
  changeLoginField,
  setReviews,
  loadReviews,
  sendReview,
  deleteAccessToken,
  clearReviewFields,
} from './actions';

import {
  fetchRestaurant,
  postLogin,
} from './services/api';

import restaurant from '../fixtures/restaurant';
import loginFields from '../fixtures/loginFields';
import { loginFormControls } from '../fixtures/controls';
import reviewFields from '../fixtures/reviewFields';

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

      fetchRestaurant.mockResolvedValue({});
    });

    it('dispatchs setRestaurant', async () => {
      await store.dispatch(loadRestaurant({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });

  describe('requestLogin', () => {
    context('when login is successful', () => {
      const email = loginFormControls[0].value;
      const password = loginFormControls[1].value;

      beforeEach(() => {
        store = mockStore({
          loginFields: { email, password },
        });

        postLogin.mockResolvedValue('ACCESS_TOKEN');
      });

      it('dispatchs setAccessToken with \'ACCESS_TOKEN\'', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken('ACCESS_TOKEN'));
      });
    });

    context('when login fails', () => {
      beforeEach(() => {
        store = mockStore({ loginFields });

        postLogin.mockRejectedValue(new Error('E-mail, Password를 확인해주세요.'));
      });

      it('throws error', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(changeLoginField({
          name: 'error',
          value: 'E-mail, Password를 확인해주세요.',
        }));
      });
    });
  });

  describe('loadReviews', () => {
    beforeEach(() => {
      store = mockStore({});

      fetchRestaurant.mockResolvedValue({ reviews: restaurant.reviews });
    });

    it('dispatchs setReviews', async () => {
      await store.dispatch(loadReviews({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setReviews(restaurant.reviews));
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      store = mockStore({ reviewFields });

      fetchRestaurant.mockResolvedValue({ reviews: restaurant.reviews });
    });

    it('dispatchs setReviews & changeReviewField', async () => {
      await store.dispatch(sendReview({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setReviews(restaurant.reviews));
      expect(actions[1]).toEqual(clearReviewFields());
    });
  });

  describe('deleteAccessToken', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs logout', () => {
      store.dispatch(deleteAccessToken());

      const actions = store.getActions();

      expect(actions[0]).toEqual(logout());
    });
  });
});
