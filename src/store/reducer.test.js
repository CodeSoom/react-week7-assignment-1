import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  setRestaurant,
} from './actions';

import CATEGORIES from '../../fixtures/categories';
import REGIONS from '../../fixtures/regions';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      selectedRestaurant: null,
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(REGIONS));

      expect(state.regions).toHaveLength(REGIONS.length);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(CATEGORIES));

      expect(state.categories).toHaveLength(CATEGORIES.length);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(RESTAURANTS));

      expect(state.restaurants).toHaveLength(RESTAURANTS.length);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: REGIONS,
        selectedRegion: null,
      };

      const selectedRegion = REGIONS[0];

      const state = reducer(initialState, selectRegion(selectedRegion.id));

      expect(state.selectedRegion).toEqual(selectedRegion);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: CATEGORIES,
        selectedCategory: null,
      };

      const selectedCategory = CATEGORIES[0];

      const state = reducer(initialState, selectCategory(selectedCategory.id));

      expect(state.selectedCategory).toEqual(selectedCategory);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const state = reducer(initialState, setRestaurant(RESTAURANT));

      expect(state.restaurant).toEqual(RESTAURANT);
    });
  });
});
