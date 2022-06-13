import {
  fetchRegions, fetchCategories, fetchRestaurants, fetchRestaurantById,
} from './api';

import REGIONS from '../../../fixtures/regions';
import CATEGORIES from '../../../fixtures/categories';
import RESTAURANTS from '../../../fixtures/restaurants';
import RESTAURANT_DETAIL from '../../../fixtures/restaurantDetail';

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

  describe('fetchRestaurantById', () => {
    beforeEach(() => {
      mockFetch(RESTAURANT_DETAIL);
    });

    it('returns restaurantDetail', async () => {
      const restaurantDetail = await fetchRestaurantById(1);

      expect(restaurantDetail).toEqual(RESTAURANT_DETAIL);
    });
  });
});
