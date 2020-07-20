import reducer from "./reducer";

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  addReview,
} from "./actions";

describe("reducer", () => {
  context("when previous state is undefined", () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      loginFields: {
        email: "",
        password: "",
      },
      accessToken: "",
      reviewFields: {
        score: "",
        description: "",
      },
    };

    it("returns initialState", () => {
      const state = reducer(undefined, { type: "action" });

      expect(state).toEqual(initialState);
    });
  });

  describe("setRegions", () => {
    it("changes regions", () => {
      const initialState = {
        regions: [],
      };

      const regions = [{ id: 1, name: "서울" }];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe("setCategories", () => {
    it("changes categories", () => {
      const initialState = {
        categories: [],
      };

      const categories = [{ id: 1, name: "한식" }];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe("setRestaurants", () => {
    it("changes restaurants", () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [{ id: 1, name: "마법사주방" }];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe("setRestaurant", () => {
    it("changes restaurant", () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: "마법사주방" };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe("마법사주방");
    });
  });

  describe("selectRegion", () => {
    it("changes selected region", () => {
      const initialState = {
        regions: [{ id: 1, name: "서울" }],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: "서울",
      });
    });
  });

  describe("selectCategory", () => {
    it("changes selected category", () => {
      const initialState = {
        categories: [{ id: 1, name: "한식" }],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: "한식",
      });
    });
  });

  describe("changeLoginField", () => {
    context("when email field is changed", () => {
      it("changes email field and remain password field", () => {
        const initialState = {
          loginFields: {
            email: "",
            password: "",
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: "email", value: "test@test.com" })
        );

        expect(state.loginFields.email).toBe("test@test.com");
        expect(state.loginFields.password).toBe("");
      });
    });

    context("when password field is changed", () => {
      it("changes password field and remain email field", () => {
        const initialState = {
          loginFields: {
            email: "",
            password: "",
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: "password", value: "1111" })
        );

        expect(state.loginFields.email).toBe("");
        expect(state.loginFields.password).toBe("1111");
      });
    });
  });

  describe("setAccessToken", () => {
    context("without accessToken", () => {
      it("doesn't change accessToken", () => {
        const initialState = {
          accessToken: "",
        };

        const state = reducer(
          initialState,
          setAccessToken({ accessToken: "" })
        );

        expect(state.accessToken).toBe("");
      });
    });

    context("with accessToken", () => {
      it("changes accessToken", () => {
        const initialState = {
          accessToken: "",
        };

        const state = reducer(
          initialState,
          setAccessToken({ accessToken: "Token" })
        );

        expect(state.accessToken).toBe("Token");
      });
    });
  });

  describe("logout", () => {
    it("changes accessToken's value to empty string", () => {
      const initialState = {
        accessToken: "ACCESS_TOKEN",
      };

      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe("");
    });
  });

  describe("changeReviewField", () => {
    context("when score field is changed", () => {
      it("changes score field and remain description field", () => {
        const initialState = {
          reviewFields: {
            score: "",
            description: "",
          },
        };

        const state = reducer(
          initialState,
          changeReviewField({ name: "score", value: "5" })
        );

        expect(state.reviewFields.score).toBe("5");
        expect(state.reviewFields.description).toBe("");
      });
    });
  });

  context("when description field is changed", () => {
    it("changes description field and remain score field", () => {
      const initialState = {
        reviewFields: {
          score: "",
          description: "",
        },
      };

      const state = reducer(
        initialState,
        changeReviewField({ name: "description", value: "good!" })
      );

      expect(state.reviewFields.score).toBe("");
      expect(state.reviewFields.description).toBe("good!");
    });
  });

  describe("addReview", () => {
    it("add review to restaurant", () => {
      const initialState = {
        restaurant: {
          id: 1,
          name: "김밥제국",
          category: "분식",
          address: "서울시 강남구 역삼동",
          reviews: [
            {
              id: 12,
              restaurantId: 3,
              name: "테스터",
              score: 5,
              description: "맛잇어요",
            },
          ],
        },
      };

      const state = reducer(
        initialState,
        addReview({ score: "10", description: "10점 만점에 10점!" })
      );

      const reversedReviews = [...state.restaurant.reviews].reverse()[0];

      expect(state.restaurant.reviews).toHaveLength(2);

      expect(reversedReviews.score).toBe("10");
      expect(reversedReviews.description).toBe("10점 만점에 10점!");
    });

    it("set empty value in review fields", () => {
      const score = "9";
      const description = "대단한 맛이네요~";

      const initialState = {
        restaurant: {
          id: 1,
          name: "김밥제국",
          category: "분식",
          address: "서울시 강남구 역삼동",
          reviews: [
            {
              id: 12,
              restaurantId: 3,
              name: "테스터",
              score: 5,
              description: "맛잇어요",
            },
          ],
        },
        reviewFields: {
          score,
          description,
        },
      };

      const state = reducer(initialState, addReview({ score, description }));

      expect(state.reviewFields.score).toBe("");
      expect(state.reviewFields.description).toBe("");
    });
  });

  describe("setReviews", () => {
    it("update reviews of current restaurant", () => {
      const initialState = {
        restaurant: {
          reviews: [],
        },
      };

      const reviews = [
        { score: "5", description: "Great!" },
      ];

      const state = reducer(initialState, setReviews(reviews));

      expect(state.restaurant.reviews).toHaveLength(1);
    });
  });
});
