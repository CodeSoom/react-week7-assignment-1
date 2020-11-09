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
  const initialState = {
    accessToken: '',
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
    reviewFields: {
      score: '',
      description: '',
    },
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const newInitialState = {
        ...initialState,
        regions: [
          { id: 1, name: '서울' },
        ],
      };

      const state = reducer(newInitialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const newInitialState = {
        ...initialState,
        categories: [
          { id: 1, name: '한식' },
        ],
      };

      const state = reducer(newInitialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('changeLoginField', () => {
    it('changes email', () => {
      const state = reducer(
        initialState,
        changeLoginField({ name: 'email', value: 'newEmail' }),
      );

      expect(state.loginFields).toEqual({
        email: 'newEmail',
        password: '',
      });
    });

    it('changes password', () => {
      const state = reducer(
        initialState,
        changeLoginField({ name: 'password', value: 'newPassword' }),
      );

      expect(state.loginFields).toEqual({
        email: '',
        password: 'newPassword',
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const state = reducer(
        initialState,
        setAccessToken('ACCESS_TOKEN'),
      );

      expect(state.accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('logout', () => {
    it('changes accessToken', () => {
      const newInitialState = {
        ...initialState,
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(newInitialState, logout());

      expect(state.accessToken).toBe('');
    });
  });

  describe('changeReviewField', () => {
    it('changes score', () => {
      const state = reducer(
        initialState,
        changeReviewField({ name: 'score', value: '5' }),
      );

      expect(state.reviewFields).toEqual({
        score: '5',
        description: '',
      });
    });

    it('changes description', () => {
      const state = reducer(
        initialState,
        changeReviewField({ name: 'description', value: 'newDescription' }),
      );

      expect(state.reviewFields).toEqual({
        score: '',
        description: 'newDescription',
      });
    });
  });
});
