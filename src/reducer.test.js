import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  setForm,
  setAccessToken,
  resetAllForm,
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
      accessToken: null,

      form: {
        email: '',
        password: '',
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

  describe('setForm', () => {
    it('changes form field data', () => {
      const initialState = {
        form: {
          email: 'email',
          password: 'password',
        },
      };

      const state = reducer(initialState, setForm(
        { name: 'email', value: 'test@test' },
      ));

      expect(state.form).toEqual({
        email: 'test@test',
        password: 'password',
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('TOKEN'));

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('resetAllForm', () => {
    it('resets all form fields to initial value', () => {
      const initialState = {
        form: {
          email: 'email',
          password: 'password',
          score: 'score',
          description: 'description',
        },
      };

      const state = reducer(initialState, resetAllForm());

      expect(state.form).toEqual({
        email: '',
        password: '',
        score: '',
        description: '',
      });
    });
  });
});
