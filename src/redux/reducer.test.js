import reducer from './reducer';

import {
  logOut,
  setCategories,
  setRegions,
  selectRegion,
  selectCategory,
  setRestaurant,
  setAccessToken,
  setLoginFields,
  setRestaurants,
  setReviews,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      reviews: [],
      selectedRegion: null,
      selectedCategory: null,
      loginFields: {},
      accessToken: '',
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

  describe('setReviews', () => {
    it('changes review', () => {
      const initialState = {
        reviews: [],
      };

      const reviews = [{
        id: 100,
        restaurantId: 1,
        name: 'tester',
        score: 5,
        description: '존맛탱',
      }];

      const state = reducer(initialState, setReviews(reviews));

      expect(state.reviews).toHaveLength(1);
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

  describe('setAccessToken', () => {
    it('changes session', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('123'));

      expect(state.accessToken).toBe('123');
    });
  });

  describe('setLoginFields', () => {
    it('changes fields', () => {
      const initialState = {
        loginFields: {
          email: '',
          password: '',
        },
      };

      const loginFields = {
        email: 'test@test',
        password: 'ilovetdd',
      };

      const state = reducer(initialState, setLoginFields(loginFields));

      expect(state.loginFields).toEqual(loginFields);
    });
  });

  describe('logOut', () => {
    it('cleans up accessToken', () => {
      const initialState = {
        accessToken: '123123123',
      };

      const state = reducer(initialState, logOut());

      expect(state.accessToken).toBeFalsy();
    });
  });
});
