import {
  ACCESS_TOKEN,
  CATEGORIES,
  REGIONS,
  RESTAURANT,
  RESTAURANTS,
} from '@fixtures';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './api';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() {
        return data;
      },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(REGIONS);
    });

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual(REGIONS);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(CATEGORIES);
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(RESTAURANTS);
    });

    it('returns restaurants', async () => {
      const restaurants = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(restaurants).toEqual(RESTAURANTS);
    });
  });

  describe('fetchRestaurant', () => {
    beforeEach(() => {
      mockFetch(RESTAURANT);
    });

    it('returns restaurants', async () => {
      const restaurant = await fetchRestaurant({ restaurantId: 1 });

      expect(restaurant).toEqual(RESTAURANT);
    });
  });

  describe('postLogin', () => {
    beforeEach(() => {
      mockFetch({ accessToken: ACCESS_TOKEN });
    });

    it('returns access token', async () => {
      const accessToken = await postLogin({
        email: 'abc@test.com',
        password: 'password',
      });

      expect(accessToken).toBe(ACCESS_TOKEN);
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      mockFetch({ });
    });

    it('returns nothing', async () => {
      const result = await postReview({
        accessToken: 'ACCESS_TOKEN',
        restaurantId: 6,
        score: '9',
        description: '정말 맛있어요!',
      });

      expect(result).toBeUndefined();
    });
  });
});
