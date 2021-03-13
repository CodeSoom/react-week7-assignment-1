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

  describe('postLogin', () => {
    context('without error', () => {
      beforeEach(() => {
        mockFetch({
          accessToken: ACCESS_TOKEN,
        });
      });

      it('returns accessToken', async () => {
        const accessToken = await postLogin({
          email: 'tester@example.com',
          password: 'test',
        });

        expect(accessToken).toEqual(ACCESS_TOKEN);
      });
    });

    context('with error', () => {
      beforeEach(() => {
        mockFetch({
          accessToken: undefined,
        });
      });

      it("doesn't returns accessToken", async () => {
        await expect(postLogin({
          email: 'tester@example.com',
          password: 'test',
        })).rejects.toThrow();
      });
    });
  });

  describe('postReview', () => {
    it('doesn`t returns ', async () => {
      const response = await postReview({
        restaurantId: 1,
        score: '5',
        description: 'good!',
        token: 'ACCESS_TOKEN',
      });

      expect(response).toBeUndefined();
    });
  });
});
