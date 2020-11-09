import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  fetchReviews,
  postLogin,
  postReview,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';
import RESTAURANT_REVIEWS from '../../fixtures/restaurantReviews';

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
      mockFetch({ accessToken: 'ACCESS_TOKEN' });
    });

    it('returns accessToken', async () => {
      const accessToken = await postLogin({ email: 'email', password: 'password' });

      expect(accessToken).toEqual('ACCESS_TOKEN');
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
      });
    });

    it('returns 200 status response', async () => {
      const response = await postReview({
        accessToken: 'ACCESS_TOKEN', restaurantId: 1, score: '5', description: 'GOOD',
      });

      expect(response.ok).toBeTruthy();
    });
  });

  describe('fetchReviews', () => {
    beforeEach(() => {
      mockFetch(RESTAURANT_REVIEWS);
    });

    it('returns restaurant reviews', async () => {
      const reviews = await fetchReviews({ restaurantId: 1 });

      expect(reviews).toEqual(RESTAURANT_REVIEWS);
    });
  });
});
