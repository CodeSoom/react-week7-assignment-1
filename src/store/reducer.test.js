import reducer, { initialState } from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  setRestaurant,
  setSessionInput,
  setAccessToken,
  setReviewInput,
} from './actions';

import CATEGORIES from '../../fixtures/categories';
import REGIONS from '../../fixtures/regions';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';
import ACCESS_TOKEN from '../../fixtures/accessToken';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });
      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer(initialState, setRegions(REGIONS));
      expect(state.regions).toHaveLength(REGIONS.length);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(CATEGORIES));
      expect(state.categories).toHaveLength(CATEGORIES.length);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const state = reducer(initialState, setRestaurants(RESTAURANTS));
      expect(state.restaurants).toHaveLength(RESTAURANTS.length);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const previousState = {
        ...initialState,
        regions: REGIONS,
        selectedRegion: null,
      };

      const selectedRegion = REGIONS[0];

      const state = reducer(previousState, selectRegion(selectedRegion.id));
      expect(state.selectedRegion).toEqual(selectedRegion);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const previousState = {
        ...initialState,
        categories: CATEGORIES,
        selectedCategory: null,
      };

      const selectedCategory = CATEGORIES[0];

      const state = reducer(previousState, selectCategory(selectedCategory.id));
      expect(state.selectedCategory).toEqual(selectedCategory);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const state = reducer(initialState, setRestaurant(RESTAURANT));
      expect(state.restaurant).toEqual(RESTAURANT);
    });
  });

  describe('setSessionInput', () => {
    it('changes session', () => {
      const input = {
        email: '이메일',
        password: '비밀번호',
      };

      const state = Object.entries(input).reduce(
        (_state, [name, value]) => reducer(_state, setSessionInput(name, value)),
        initialState,
      );

      expect(state.session.input).toEqual(input);
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const state = reducer(initialState, setAccessToken(ACCESS_TOKEN));
      expect(state.session.accessToken).toEqual(ACCESS_TOKEN);
    });
  });

  describe('setReviewInput', () => {
    it('changes review', () => {
      const input = {
        score: '5',
        description: 'REVIEW_CONTENT',
      };

      const state = Object.entries(input).reduce(
        (_state, [name, value]) => reducer(_state, setReviewInput(name, value)),
        initialState,
      );

      expect(state.review.input).toEqual(input);
    });
  });
});
