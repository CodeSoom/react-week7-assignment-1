import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginFields,
  setAccessToken,
  deleteAccessToken,
  changeReviewFields,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      reviewFields: { score: '', description: '' },
      selectedRegion: null,
      selectedCategory: null,
      loginFields: { email: '', password: '' },
      accessToken: null,
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

  describe('changeReviewFields', () => {
    it('changes review Fields', () => {
      const initialState = {
        reviewFields: { score: 3, description: '' },
      };

      const state = reducer(
        initialState,
        changeReviewFields({
          name: 'description',
          value: '그만큼 맜있으시다는 거지',
        })
      );

      const {
        reviewFields: { score, description },
      } = state;

      expect(score).toBe(3);
      expect(description).toBe('그만큼 맜있으시다는 거지');
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

  describe('changeLoginFields', () => {
    it('changes login fields', () => {
      const initialState = {
        loginFields: { email: '', password: '1234' },
      };

      const state = reducer(
        initialState,
        changeLoginFields({ name: 'email', value: 'tester@example.com' })
      );

      const {
        loginFields: { email, password },
      } = state;

      expect(email).toEqual('tester@example.com');
      expect(password).toEqual('1234');
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const initialState = {
        accessToken: null,
      };

      const { accessToken } = reducer(initialState, setAccessToken('12345678'));

      expect(accessToken).toEqual('12345678');
    });
  });

  describe('deleteAccessToken', () => {
    it('delete accessToken', () => {
      const initialState = {
        accessToken: '12345678',
      };

      const { accessToken } = reducer(initialState, deleteAccessToken());

      expect(accessToken).toBeNull();
    });
  });
});
