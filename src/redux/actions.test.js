import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { useDispatch, useSelector } from 'react-redux';
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
  setEmail,
  setPassword,
  setDescription,
  setScore,
  writeReview,
  deleteAccessToken,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

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
    beforeEach(() => {
      store = mockStore({
        email: 'tester@example.com',
        password: 'test',
      });
    });

    it('dispatches requestLogin', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken(''));
    });
  });

  describe('setEmail', () => {
    it('changes email', () => {
      useSelector.mockImplementation((selector) => selector({
        email: '',
      }));

      dispatch(setEmail('tester@example.com'));

      expect(dispatch).toBeCalledWith({
        payload: {
          email: 'tester@example.com',
        },
        type: 'setEmail',
      });
    });
  });

  describe('setPassword', () => {
    it('changes email', () => {
      useSelector.mockImplementation((selector) => selector({
        password: '',
      }));

      dispatch(setPassword('tester@example.com'));

      expect(dispatch).toBeCalledWith({
        payload: {
          password: 'tester@example.com',
        },
        type: 'setPassword',
      });
    });
  });

  describe('setDescription', () => {
    it('changes review description', () => {
      useSelector.mockImplementation((selector) => selector({
        review: {
          description: '',
        },
      }));

      dispatch(setDescription('description'));

      expect(dispatch).toBeCalledWith({
        payload: {
          description: 'description',
        },
        type: 'setDescription',
      });
    });
  });

  describe('setScore', () => {
    it('changes review score', () => {
      useSelector.mockImplementation((selector) => selector({
        review: {
          score: 0,
        },
      }));

      dispatch(setScore(5));

      expect(dispatch).toBeCalledWith({
        payload: {
          score: 5,
        },
        type: 'setScore',
      });
    });
  });

  describe('writeReview', () => {
    beforeEach(() => {
      store = mockStore({
        review: {
          score: 5,
          description: '항상 먹는 제품입니다.',
        },
      });
    });

    it('dispatches writeReview', async () => {
      await store.dispatch(writeReview({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });

  describe('deleteAccessToken', () => {
    it('changes review score', () => {
      useSelector.mockImplementation((selector) => selector({
        accessToken: 'token',
      }));

      dispatch(deleteAccessToken(5));

      expect(dispatch).toBeCalledWith({ type: 'deleteAccessToken' });
    });
  });
});
