import mockAxios from 'jest-mock-axios';

import {
  fetchRestaurants,
  fetchRestaurantById,
} from './restaurantApi';

import RESTAURANTS from '../../../fixtures/restaurants';
import RESTAURANT_DETAIL from '../../../fixtures/restaurantDetail';

jest.mock('axios');

describe('restaurantApi', () => {
  const mockFetch = (data) => mockAxios.get.mockResolvedValue({ data });
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
