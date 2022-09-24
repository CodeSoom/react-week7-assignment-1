import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';
import LOGIN_FIELDS from '../../fixtures/loginFields';

describe('api', () => {
  const mockFetch = ({ data = {}, ok = true } = {}) => {
    global.fetch = jest.fn().mockResolvedValue({
      ok,
      async json() { return data; },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch({ data: REGIONS });
    });

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual(REGIONS);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch({ data: CATEGORIES });
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch({ data: RESTAURANTS });
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
      mockFetch({ data: RESTAURANT });
    });

    it('returns restaurants', async () => {
      const restaurant = await fetchRestaurant({ restaurantId: 1 });

      expect(restaurant).toEqual(RESTAURANT);
    });
  });

  describe('postLogin', () => {
    context('when login is successful', () => {
      beforeEach(() => {
        mockFetch({ data: { accessToken: 'ACCESS_TOKEN' } });
      });

      it('returns access token', async () => {
        const accessToken = await postLogin(LOGIN_FIELDS);

        expect(accessToken).toEqual('ACCESS_TOKEN');
      });
    });

    context('when login fails', () => {
      beforeEach(() => {
        mockFetch({ ok: false });
      });

      it('throws error', async () => {
        try {
          await postLogin(LOGIN_FIELDS);
        } catch (error) {
          expect(error.message).toBe('E-mail, Password를 확인해주세요.');
        }
      });
    });
  });
});
