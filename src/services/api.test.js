import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLoginForm,
  postReviewForm,
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

  describe('postLoginForm', () => {
    const result = { accessToken: 'ACCESS_TOKEN' };

    beforeEach(() => {
      mockFetch(result);
    });

    it('토큰을 반환한다.', async () => {
      const email = 'tester@example.com';
      const password = 'test';

      const response = await postLoginForm({ email, password });

      expect(response).toEqual(result);
    });
  });

  describe('postReviewForm', () => {
    const result = { result: 'SUCCESS' };

    beforeEach(() => {
      mockFetch(result);
    });

    it('토큰을 반환한다.', async () => {
      const accessToken = 'ACCESS_TOKEN';
      const restaurantId = 12;
      const score = 70;
      const description = '맛있어요!';

      const responset = await postReviewForm({
        accessToken,
        restaurantId,
        score,
        description,
      });

      expect(responset).toEqual(result);
    });
  });
});
