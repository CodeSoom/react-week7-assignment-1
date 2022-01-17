import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from "./api";

import REGIONS from "../../fixtures/regions";
import CATEGORIES from "../../fixtures/categories";
import RESTAURANTS from "../../fixtures/restaurants";
import RESTAURANT from "../../fixtures/restaurant";

describe("api", () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() {
        return data;
      },
    });
  };

  describe("fetchRegions", () => {
    beforeEach(() => {
      mockFetch(REGIONS);
    });

    it("returns regions", async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual(REGIONS);
    });
  });

  describe("fetchCategories", () => {
    beforeEach(() => {
      mockFetch(CATEGORIES);
    });

    it("returns categories", async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe("fetchRestaurants", () => {
    beforeEach(() => {
      mockFetch(RESTAURANTS);
    });

    it("returns restaurants", async () => {
      const restaurants = await fetchRestaurants({
        regionName: "서울",
        categoryId: 1,
      });

      expect(restaurants).toEqual(RESTAURANTS);
    });
  });

  describe("fetchRestaurant", () => {
    beforeEach(() => {
      mockFetch(RESTAURANT);
    });

    it("returns restaurants", async () => {
      const restaurant = await fetchRestaurant({ restaurantId: 1 });

      expect(restaurant).toEqual(RESTAURANT);
    });
  });

  describe("postLogin", () => {
    beforeEach(() => {
      mockFetch({ accessToken: "accessToken" });
    });

    it("returns accessToken", async () => {
      const accesstoken = await postLogin({
        email: "test@test",
        password: "1234",
      });

      expect(accesstoken).toBe("accessToken");
    });
  });

  describe("postReview", () => {
    beforeEach(() => {
      mockFetch();
    });

    it("return nothing", async () => {
      const nothing = await postReview({
        accessToken: "accessToken",
        restaurantId: 1,
        score: 5,
        description: "맛 좋은 레스토랑",
      });
      expect(nothing).toBeUndefined();
    });
  });
});
