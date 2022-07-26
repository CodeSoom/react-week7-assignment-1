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
      ok: true,
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
    context('when success', () => {
      beforeEach(() => {
        mockFetch({
          accessToken: 'ACCESS_TOKEN',
        });
      });

      it('returns accessToken', async () => {
        const accessToken = await postLogin({ email: '', password: '' });

        expect(accessToken).toEqual('ACCESS_TOKEN');
      });
    });

    context('when failed', () => {
      beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValueOnce({
          ok: false,
        });
      });

      it('throws error message', async () => {
        await expect(async () => {
          await postLogin({ email: '', password: '' });
        }).rejects.toThrow('로그인에 실패했습니다.');
      });
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      mockFetch(true);
    });

    context('success to post review', () => {
      it('returns true', async () => {
        const result = await postReview({
          email: '',
          password: '',
          accessToken: 'ACCESS_TOKEN',
          restaurantId: 1,
        });

        expect(result).toEqual(true);
      });
    });
  });
});
