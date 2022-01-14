import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
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
      loginField: {},
      reviewField: {},
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

  describe('changeLoginField', () => {
    const initialState = {
      loginField: {
        email: '',
        password: '',
      },
    };

    it('changes email', () => {
      const state = reducer(initialState,
        changeLoginField({
          name: 'email',
          value: 'tester@example.com',
        }));

      expect(state.loginField.email).toBe('tester@example.com');
    });

    it('changes password', () => {
      const state = reducer(initialState,
        changeLoginField({
          name: 'password',
          value: 'test',
        }));

      expect(state.loginField.password).toBe('test');
    });
  });

  describe('setAccessToken', () => {
    const initialState = {
      accessToken: '',
    };
    it('set accessToken', () => {
      const state = reducer(initialState, setAccessToken({
        accessToken: 'ACCESS_TOKEN',
      }));

      expect(state.accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('logout', () => {
    const initialState = {
      accessToken: 'ACCESS_TOKEN',
    };
    it('logout', () => {
      const state = reducer(initialState, logout(initialState));

      expect(state.accessToken).toBe(null);
    });
  });
  describe('changeReviewField', () => {
    const initialState = {
      reviewField: {
        score: '',
        description: '',
      },
    };

    it('changes score', () => {
      const state = reducer(initialState,
        changeReviewField({
          name: 'score',
          value: 3,
        }));

      expect(state.reviewField.score).toBe(3);
    });

    it('changes description', () => {
      const state = reducer(initialState,
        changeReviewField({
          name: 'description',
          value: 'test',
        }));

      expect(state.reviewField.description).toBe('test');
    });
  });
});
