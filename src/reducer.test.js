import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  setAccessToken,
  selectRegion,
  selectCategory,
  setErrorMessage,
  changeReviewFields,
  changeLoginFields,
  logout,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      accessToken: '',
      selectedRegion: null,
      selectedCategory: null,
      reviewFields: {
        score: '',
        description: '',
      },
      loginFields: {
        email: '',
        password: '',
      },
      errorMessage: '',
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

  describe('setAccessToken', () => {
    it('changes token for login', () => {
      const initialState = {
        accessToken: null,
      };

      const accessToken = 'ACCESS_TOKEN';

      const state = reducer(initialState, setAccessToken(accessToken));

      expect(state.accessToken).toBe('ACCESS_TOKEN');
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

  describe('setErrorMessage', () => {
    it('changes error message', () => {
      const initialState = {
        errorMessage: '',
      };

      const errorMessage = 'ERROR';

      const state = reducer(initialState, setErrorMessage(errorMessage));

      expect(state.errorMessage).toBe('ERROR');
    });
  });
  describe('changeReviewFields', () => {
    it('changes review fields', () => {
      const initialState = {
        reviewFields: {
          score: null,
          description: null,
        },
      };

      const reviewFields = {
        name: 'score',
        value: 3,
      };

      const state = reducer(initialState, changeReviewFields(reviewFields));

      expect(state.reviewFields.score).toBe(3);
    });
  });

  describe('changeLoginFields', () => {
    it('changes login fields', () => {
      const initialState = {
        loginFields: {
          email: null,
          password: null,
        },
      };

      const loginFields = {
        name: 'email',
        value: 'test@example.com',
      };

      const state = reducer(initialState, changeLoginFields(loginFields));

      expect(state.loginFields.email).toBe('test@example.com');
    });
  });

  describe('logout', () => {
    it('removes access token', () => {
      const initialState = {
        accessToken: 'TOKEN',
      };

      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe('');
    });
  });
});
