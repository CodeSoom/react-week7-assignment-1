import thunk from "redux-thunk";

import configureStore from "redux-mock-store";

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  loadRestaurant,
  setRestaurants,
  setRestaurant,
  sendReview,
  requestLogin,
  setAccessToken,
} from "./actions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// fetch같은 코어 노드모듈을 명시적으로 수동모의 해주어야 한다
jest.mock("./services/api");

describe("actions", () => {
  let store;

  describe("loadInitialData", () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it("runs setRegions and setCategories", async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
      expect(actions[1]).toEqual(setCategories([]));
    });
  });

  describe("loadRestaurants", () => {
    context("with selectedRegion and selectedCategory", () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: "서울" },
          selectedCategory: { id: 1, name: "한식" },
        });
      });

      it("runs setRestaurants", async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();
        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });

    context("without selectedRegion", () => {
      beforeEach(() => {
        store = mockStore({
          selectedCategory: { id: 1, name: "한식" },
        });
      });

      it("does'nt run any actions", async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context("without selectedCategory", () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: "서울" },
        });
      });

      it("does'nt run any actions", async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  describe("loadRestaurant", () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it("dispatchs setRestaurant", async () => {
      await store.dispatch(loadRestaurant({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });

  describe("requestLogin", () => {
    beforeEach(() => {
      store = mockStore({
        loginField: {
          email: "test@test",
          password: "1234",
        },
      });
    });

    it("dispatch setAccessToken", async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken({}));
    });
  });

  describe("sendReview", () => {
    beforeEach(() => {
      store = mockStore({
        reviewField: {
          score: 5,
          description: "분위기가 좋아요",
        },
      });
    });

    it("dispatchs setReview", async () => {
      await store.dispatch(sendReview({ restaurantId: 1 }));

      const actions = store.getActions();
      // actions[0]은 null로 만들어주는 action이니깐
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });
});
