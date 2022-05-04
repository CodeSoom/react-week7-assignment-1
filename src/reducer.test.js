import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  updateLoginField,
  setAccessToken,
  updateReviewField,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      loginFields: {
        email: '',
        password: '',
      },
      accessToken: '',
      reviewFields: {
        score: '',
        description: '',
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

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('updateLoginField', () => {
    context('when email changes', () => {
      const initialState = {
        loginFields: {
          email: 'previousEmail',
          password: 'previousPassword',
        },
      };

      const state = reducer(
        initialState,
        updateLoginField({ name: 'email', value: 'test@test' }),
      );

      expect(state.loginFields.email).toBe('test@test');
      expect(state.loginFields.password).toBe('previousPassword');
    });

    context('when password changes', () => {
      const initialState = {
        loginFields: {
          email: 'previousEmail',
          password: 'previousPassword',
        },
      };

      const state = reducer(
        initialState,
        updateLoginField({ name: 'password', value: '1234' }),
      );

      expect(state.loginFields.email).toBe('previousEmail');
      expect(state.loginFields.password).toBe('1234');
    });
  });

  describe('setAccessToken', () => {
    const initialState = {
      accessToken: '',
    };

    const state = reducer(initialState, setAccessToken('token'));

    expect(state.accessToken).toBe('token');
  });

  describe('updateReviewField', () => {
    context('when score changes', () => {
      const initialState = {
        reviewFields: {
          score: '',
          description: '',
        },
      };

      const state = reducer(
        initialState,
        updateReviewField({ name: 'score', value: 5 }),
      );

      expect(state.reviewFields.score).toBe(5);
    });

    context('when description changes', () => {
      const initialState = {
        reviewFields: {
          score: '',
          description: '',
        },
      };

      const state = reducer(
        initialState,
        updateReviewField({ name: 'description', value: '맛있어요' }),
      );

      expect(state.reviewFields.description).toBe('맛있어요');
    });
  });
});
