import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  setLoginFields,
  setAccessToken,
  setLoginFieldsError,
  setReviewFields,
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
      reviewFields: {
        score: 0,
        reviewContent: '',
      },
      accessToken: '',
      loginFieldsError: false,
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

  describe('setLoginFormField', () => {
    context('when change loginForm of email', () => {
      const name = 'email';
      const value = 'test@test.com';

      it('changed email', () => {
        const initialState = {
          loginFields: {
            email: '',
            password: '',
          },
        };

        const state = reducer(initialState, setLoginFields({ name, value }));

        expect(state.loginFields[name]).toBe(value);
      });
    });

    context('when change loginForm of password', () => {
      const name = 'password';
      const value = '1234';

      it('changed password', () => {
        const initialState = {
          loginFields: {
            email: '',
            password: '',
          },
        };

        const state = reducer(initialState, setLoginFields({ name, value }));

        expect(state.loginFields[name]).toBe(value);
      });
    });
  });

  describe('setAcceessToken', () => {
    it('changes acceessToken', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('ACCESS_TOKEN'));

      expect(state.accessToken).toEqual('ACCESS_TOKEN');
    });
  });

  describe('setLoginFieldsError', () => {
    it('chagne loginFieldsError', () => {
      const initialState = {
        loginFieldsError: false,
      };

      const state = reducer(initialState, setLoginFieldsError(true));

      expect(state.loginFieldsError).toBeTruthy();
    });
  });

  describe('setReviewFields', () => {
    it('change score field', () => {
      const initialState = {
        reviewFields: {
          score: 0,
          reviewContent: '',
        },
      };
      const name = 'score';
      const value = 5;

      const state = reducer(initialState, setReviewFields({ name, value }));

      expect(state.reviewFields[name]).toBe(value);
    });

    it('change reviewContent field', () => {
      const initialState = {
        reviewFields: {
          score: 0,
          reviewContent: '',
        },
      };
      const name = 'reviewContent';
      const value = '바보들앙 이거 리뷰 아니지롱~';

      const state = reducer(initialState, setReviewFields({ name, value }));

      expect(state.reviewFields[name]).toBe(value);
    });
  });
});
