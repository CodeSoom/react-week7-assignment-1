import {
  fetchCategories,
  fetchRegions,
  fetchRestaurant,
  fetchRestaurants,
  postLogin,
  postReview,
} from '@api';

import {
  CATEGORIES,
  REGIONS,
  RESTAURANT,
  RESTAURANTS,
  TOKEN,
} from '@fixtures';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
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
      mockFetch(TOKEN);
    });

    it('returns accessToken', async () => {
      const accessToken = await postLogin({
        email: 'tester@example.com',
        password: 'test',
      });

      expect(accessToken).toEqual(TOKEN.accessToken);
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      mockFetch({});
    });

    it('returns list of reviews', async () => {
      const review = await postReview({
        reviewFields: {
          score: 3,
          description: 'TDD는 맛있다',
          restaurantId: 1,
          accessToken: '123123123',
        },
      });

      expect(review).toEqual({});
    });
  });
});
