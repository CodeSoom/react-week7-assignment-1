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
import LOGIN_FIELDS from '../../fixtures/loginFields';
import REVIEW_FIELDS from '../../fixtures/reviewFields';

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
        await expect(async () => {
          await postLogin(LOGIN_FIELDS);
        }).rejects.toThrowError(new Error('E-mail, Password를 확인해주세요.'));
      });
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      mockFetch();
    });

    it('returns restaurants', async () => {
      const response = await postReview({
        accessToken: 'ACCESS_TOKEN',
        restaurantId: 1,
        score: REVIEW_FIELDS.score,
        description: REVIEW_FIELDS.description,
      });

      expect(response.ok).toEqual(true);
    });
  });
});
