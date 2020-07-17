import reducer from './reducer';

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
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      selectedRestaurant: null,
      session: {
        input: {
          email: '',
          password: '',
        },
        accessToken: null,
      },
      review: {
        input: {
          score: '',
          description: '',
        },
      },
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

  describe('setSessionInput', () => {
    it('changes session', () => {
      const initialState = {
        session: {
          input: {
            email: '',
            password: '',
          },
        },
      };

      const input = {
        email: '이메일',
        password: '비밀번호',
      };

      let state = initialState;
      Object.entries(input).forEach(([name, value]) => {
        state = reducer(state, setSessionInput(name, value));
      });

      expect(state.session.input).toEqual(input);
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const initialState = {
        session: {
          accessToken: null,
        },
      };

      const state = reducer(initialState, setAccessToken(ACCESS_TOKEN));

      expect(state.session.accessToken).toEqual(ACCESS_TOKEN);
    });
  });

  describe('setReviewInput', () => {
    it('changes review', () => {
      const initialState = {
        review: {
          input: {
            score: '',
            description: '',
          },
        },
      };

      const input = {
        score: '5',
        description: 'REVIEW_CONTENT',
      };

      let state = initialState;
      Object.entries(input).forEach(([name, value]) => {
        state = reducer(state, setReviewInput(name, value));
      });

      expect(state.review.input).toEqual(input);
    });
  });
});
