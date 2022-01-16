import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeReviewField,
  requestLogout,
  changeLoginField,
  setAccessToken,
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
      accessToken: '',
      loginField: {
        email: '',
        password: '',
      },
      reviewField: {
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

      const regions = [{ id: 1, name: '서울' }];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [{ id: 1, name: '한식' }];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [{ id: 1, name: '마법사주방' }];

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
        regions: [{ id: 1, name: '서울' }],
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
        categories: [{ id: 1, name: '한식' }],
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
    it('changes Login Field', () => {
      const initialState = {
        loginField: {
          email: '',
          password: '',
        },
      };

      const state = reducer(
        initialState,
        changeLoginField({ name: 'email', value: 'test@test' }),
      );

      expect(state.loginField).toEqual({
        email: 'test@test',
        password: '',
      });
    });
  });

  describe('setAccessToken', () => {
    it('set accessToken in state', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('accessToken'));

      expect(state.accessToken).toBe('accessToken');
    });
  });

  describe('changeReviewField', () => {
    it('changes Review Field', () => {
      const initialState = {
        reviewField: {
          score: '',
          description: '',
        },
      };

      const state = reducer(
        initialState,
        changeReviewField({ name: 'score', value: 5 }),
      );

      expect(state.reviewField.score).toBe(5);
    });
  });

  describe('requestLogout', () => {
    it('logout done', () => {
      const initialState = {
        accessToken: 'accessToken',
      };

      const state = reducer(initialState, requestLogout());

      expect(state.accessToken).toBe('');
    });
  });
});
