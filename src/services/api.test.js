import axios from 'axios';

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

  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    context('when request succeeded', () => {
      beforeEach(() => {
        axios.mockImplementation(() => Promise.resolve({
          data: {
            accessToken: ACCESS_TOKEN,
          },
        }));
      });

      it('returns token for access', async () => {
        const accessToken = await postLogin({
          email: 'tester@example.com',
          password: 'test',
        });

        expect(accessToken).toEqual(ACCESS_TOKEN);
      });
    });
  });

  context('when request failed', () => {
    beforeEach(() => {
      axios.mockImplementation(() => Promise.reject(
        new Error('request failed'),
      ));
    });

    it('returns empty string', async () => {
      const accessToken = await postLogin({
        email: 'tester@example.com',
        password: 'test',
      });

      expect(accessToken).toEqual('');
    });
  });

  describe('postReview', () => {
    context('when request succeeded', () => {
      const data = { restaurant: RESTAURANT };

      beforeEach(() => {
        axios.mockImplementation(() => Promise.resolve({
          data,
        }));
      });

      it('returns restaurant data', async () => {
        const requestedData = await postReview({
          accessToken: 'TOKEN', restaurantId: 1, score: 3, description: '맛있어요',
        });

        expect(requestedData).toEqual(data);
      });
    });
  });

  context('when request failed', () => {
    beforeEach(() => {
      axios.mockImplementation(() => Promise.reject(
        new Error('request failed'),
      ));
    });

    it('returns empty string', async () => {
      const requestedData = await postReview({
        accessToken: 'TOKEN', restaurantId: 1, score: 3, description: '맛있어요',
      });

      expect(requestedData).toEqual('');
    });
  });
});
