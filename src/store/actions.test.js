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
    beforeEach(() => {
      store = mockStore({
        session: {
          accessToken: null,
        },
      });
    });

    context('with session input', () => {
      const input = {
        email: '이메일',
        password: '비밀번호',
      };

      it('runs setAccessToken', async () => {
        await store.dispatch(login(input));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken({}));
      });
    });

    context('without session input', () => {
      const input = {
        email: '',
        password: '',
      };

      it('does\'nt run any actions', async () => {
        await store.dispatch(login(input));

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
