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
import accessTokenFixture from '../../fixtures/accessToken';

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

  describe('fetchAcessToken', () => {
    beforeEach(() => {
      mockFetch(accessTokenFixture);
    });

    it('returns accessToken', async () => {
      const email = 'correctEmail@example.com';
      const password = 'correctPassword';

      const accessToken = await fetchAccessToken({ email, password });

      expect(accessToken).toEqual(accessTokenFixture);
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      mockFetch({});
    });

    it('returns the empty body', async () => {
      const accessToken = 'TESTACCESSTOKEN';
      const restaurantId = 1;
      const score = '5';
      const description = 'good';

      const emptyBody = await postReview({
        accessToken,
        restaurantId,
        score,
        description,
      });

      expect(emptyBody).toEqual({});
    });
  });
});
