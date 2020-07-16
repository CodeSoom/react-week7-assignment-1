import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  login,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';
import ACCESS_TOKEN from '../../fixtures/accessToken';

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

  describe('login', () => {
    beforeEach(() => {
      mockFetch(ACCESS_TOKEN);
    });

    it('requests login', async () => {
      const accessToken = await login({ email: 'test@test.com', password: 'password' });

      expect(accessToken).toEqual(ACCESS_TOKEN);
    });
  });
});
