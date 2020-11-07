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
  changeReviewFields,
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

  describe('changeLoginFields', () => {
    context('change email input field', () => {
      it('changes input field', () => {
        const initialState = {
          loginFields: {
            email: '',
          },
        };

        const { loginFields } = reducer(initialState, changeLoginFields({
          name: 'email',
          value: 'tester@example.com',
        }));

        expect(loginFields.email).toEqual('tester@example.com');
      });
    });

    context('change password input field', () => {
      it('changes input field', () => {
        const initialState = {
          loginFields: {
            password: '',
          },
        };

        const { loginFields } = reducer(initialState, changeLoginFields({
          name: 'password',
          value: '1234',
        }));

        expect(loginFields.password).toEqual('1234');
      });
    });
  });

  describe('setAccessToken', () => {
    it('get accessToken', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('token'));

      expect(state.accessToken).toEqual('token');
    });
  });

  describe('changeReviewFields', () => {
    context('change score input field', () => {
      it('changes input field', () => {
        const initialState = {
          reviewFields: {
            score: '',
          },
        };

        const { reviewFields } = reducer(initialState, changeReviewFields({
          name: 'score',
          value: '5',
        }));

        expect(reviewFields.score).toEqual('5');
      });
    });

    context('change description input field', () => {
      it('changes input field', () => {
        const initialState = {
          reviewFields: {
            description: '',
          },
        };

        const { reviewFields } = reducer(initialState, changeReviewFields({
          name: 'description',
          value: '맛있어요!',
        }));

        expect(reviewFields.description).toEqual('맛있어요!');
      });
    });
  });
});
