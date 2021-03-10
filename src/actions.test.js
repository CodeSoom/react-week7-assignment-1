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
  changeLoginFields,
  postLoginFields,
  setAccessToken,
  deleteAccessToken,
  changeReviewFields,
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

    it('runs setRestaurant', async () => {
      await store.dispatch(loadRestaurant({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });

  describe('changeReviewFields', () => {
    beforeEach(() => {
      store = mockStore({ reviewFiels: { score: null, description: null } });
    });

    it('runs changeReviewFields', () => {
      store.dispatch(changeReviewFields({ name: 'score', value: '3' }));
      store.dispatch(
        changeReviewFields({
          name: 'description',
          value: '그만큼 맜있으시다는 거지',
        })
      );

      const actions = store.getActions();

      expect(actions[0]).toEqual(
        changeReviewFields({ name: 'score', value: '3' })
      );
      expect(actions[1]).toEqual(
        changeReviewFields({
          name: 'description',
          value: '그만큼 맜있으시다는 거지',
        })
      );
    });
  });

  describe('changeLoginFields', () => {
    beforeEach(() => {
      store = mockStore({});
    });
    it('runs changeLoginFileds', () => {
      store.dispatch(
        changeLoginFields({ name: 'email', value: 'tester@example.com' })
      );
      store.dispatch(changeLoginFields({ name: 'password', value: 'test' }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(
        changeLoginFields({ name: 'email', value: 'tester@example.com' })
      );

      expect(actions[1]).toEqual(
        changeLoginFields({ name: 'password', value: 'test' })
      );
    });
  });

  describe('postLoginFields', () => {
    context('without email, password ', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: { email: '', password: '' },
        });
      });

      it("does'nt run any actions", async () => {
        await store.dispatch(postLoginFields());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('with email, password ', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: 'tester@example.com',
            password: 'test',
          },
        });
      });

      it('runs setAccessToken', async () => {
        await store.dispatch(postLoginFields());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken('12345678'));
      });
    });
  });

  describe('deleteAccessToken', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: '12345678',
      });
    });

    it('runs deleteAccessToken', () => {
      store.dispatch(deleteAccessToken());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'deleteAccessToken',
      });
    });
  });
});
