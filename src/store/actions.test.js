import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  setRestaurants,
  getRestaurantById,
  setRestaurant,
  setSessionInput,
  setAccessToken,
  login,
  logout,
  setReviewInput,
  submitReview,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

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

  describe('getRestaurantById', () => {
    beforeEach(() => {
      store = mockStore({
        restaurant: null,
      });
    });

    context('with restaurantId', () => {
      const restaurantId = 1;

      it('runs setRestaurant', async () => {
        await store.dispatch(getRestaurantById(restaurantId));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurant({}));
      });
    });

    context('with null', () => {
      const restaurantId = null;

      it('does\'nt run any actions', async () => {
        await store.dispatch(getRestaurantById(restaurantId));

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  describe('setSessionInput', () => {
    beforeEach(() => {
      store = mockStore({
        session: {
          input: {
            email: '',
            password: '',
          },
        },
      });
    });

    context('with email, password', () => {
      const input = {
        email: '이메일',
        password: '비밀번호',
      };

      it('sets session-input ', async () => {
        Object.entries(input).forEach(([name, value]) => {
          // When
          const action = store.dispatch(setSessionInput(name, value));
          // Then
          expect(action.type).toBe('setSessionInput');
          expect(action.payload.sessionInput).toEqual({ [name]: value });
        });

        const actions = store.getActions();

        expect(actions).toHaveLength(2);
      });
    });
  });

  describe('login', () => {
    context('with session input', () => {
      beforeEach(() => {
        store = mockStore({
          session: {
            input: {
              email: '이메일',
              password: '비밀번호',
            },
          },
        });
      });

      it('runs setAccessToken', async () => {
        await store.dispatch(login());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken(''));
      });
    });

    context('without session input', () => {
      beforeEach(() => {
        store = mockStore({
          session: {
            input: {
              email: '',
              password: '',
            },
          },
        });
      });

      it('does\'nt run any actions', async () => {
        await store.dispatch(login());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  describe('logout', () => {
    it('runs setAccessToken', async () => {
      await store.dispatch(logout());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken(null));
    });
  });

  describe('setReviewInput', () => {
    beforeEach(() => {
      store = mockStore({
        review: {
          input: {
            score: '',
            description: '',
          },
        },
      });
    });

    context('with score, description', () => {
      const input = {
        score: 5,
        description: 'REVIEW_CONTENT',
      };

      it('sets review-input ', async () => {
        Object.entries(input).forEach(([name, value]) => {
          // When
          const action = store.dispatch(setReviewInput(name, value));
          // Then
          expect(action.type).toBe('setReviewInput');
          expect(action.payload.reviewInput).toEqual({ [name]: value });
        });

        const actions = store.getActions();

        expect(actions).toHaveLength(2);
      });
    });
  });

  describe('submitReview', () => {
    context('with review-input', () => {
      beforeEach(() => {
        store = mockStore({
          session: {
            accessToken: 'ACCESS_TOKEN',
          },
          restaurant: {
            id: 'RESTAURANT_ID',
          },
          review: {
            input: {
              score: '5',
              description: 'REVIEW_CONTENT',
            },
          },
        });
      });

      it('runs setReviewInput twice', async () => {
        await store.dispatch(submitReview());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setReviewInput('score', ''));
        expect(actions[1]).toEqual(setReviewInput('description', ''));
      });
    });

    context('without review input', () => {
      beforeEach(() => {
        store = mockStore({
          session: {
            accessToken: 'ACCESS_TOKEN',
          },
          restaurant: {
            id: 'RESTAURANT_ID',
          },
          review: {
            input: {
              score: '',
              description: '',
            },
          },
        });
      });

      it('does\'nt run any actions', async () => {
        await store.dispatch(submitReview());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
