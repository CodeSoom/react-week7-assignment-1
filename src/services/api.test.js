import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
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

  describe('postLogin', () => {
    const ACCESS_TOKEN = { accessToken: 'ACCESS_TOKEN' };

    beforeEach(() => {
      mockFetch(ACCESS_TOKEN);
    });

    it('returns accessToken', async () => {
      const accessToken = await postLogin({ email: 'test@test', password: '1234' });

      expect(accessToken).toEqual('ACCESS_TOKEN');
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      mockFetch({ result: 'success' });
    });

    it('return result', async () => {
      const result = await postReview({
        accessToken: 'ACCESS_TOKEN',
        restaurantId: '1',
        score: '5',
        description: '맛이써',
      });
      expect(result).toEqual(result);
    });
  });
});
