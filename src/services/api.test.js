import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  fetchAccessToken,
  postReview,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';

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

  describe('fetchAccessToken', () => {
    beforeEach(() => {
      mockFetch({
        accessToken: 'ACCESS_TOKEN',
      });
    });

    const loginFields = {
      email: 'newEmail@example.com',
      password: 'newPassword',
    };

    it('returns restaurants', async () => {
      const accessToken = await fetchAccessToken(loginFields);

      expect(accessToken).toEqual('ACCESS_TOKEN');
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      mockFetch({
        accessToken: 'ACCESS_TOKEN',
      });
    });

    const accessToken = {
      accessToken: 'ACCESS_TOKEN',
    };

    const restaurantId = {
      restaurantId: '1',
      description: 'Good!',
    };

    const reviewField = {
      score: '5',
      description: 'Good!',
    };

    it('returns restaurants', async () => {
      await postReview({ accessToken, restaurantId, reviewField });
    });
  });
});
