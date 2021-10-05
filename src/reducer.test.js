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
  setReviews,
  clearReviewField,
} from './actions';

describe('reducer', () => {
  given('previousState', () => ({
    regions: given.regions,
    categories: given.categories,
    restaurants: [],
    restaurant: {
      reviews: [],
    },
    selectedRegion: null,
    selectedCategory: null,
    accessToken: given.accessToken,
    loginField: {
      email: '',
      password: '',
    },
    reviewField: given.reviewField,
  }));

  given('regions', () => []);
  given('categories', () => []);
  given('accessToken', () => '');
  given('reviewField', () => ({
    score: '',
    description: '',
  }));

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(given.previousState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(given.previousState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(given.previousState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(given.previousState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(given.previousState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      given('regions', () => [
        { id: 1, name: '서울' },
      ]);

      const state = reducer(given.previousState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      given('categories', () => [
        { id: 1, name: '한식' },
      ]);

      const state = reducer(given.previousState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('changeLoginField', () => {
    it('changes e-mail input', () => {
      const state = reducer(
        given.previousState,
        changeLoginField({ name: 'email', value: 'test@soom.com' }),
      );

      expect(state.loginField).toEqual({
        email: 'test@soom.com',
        password: '',
      });
    });

    it('changes password input', () => {
      const state = reducer(
        given.previousState,
        changeLoginField({ name: 'password', value: '1234' }),
      );

      expect(state.loginField).toEqual({
        email: '',
        password: '1234',
      });
    });
  });

  describe('setAccessToken', () => {
    it('sets access token', () => {
      const state = reducer(given.previousState, setAccessToken('TOKEN'));

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('logout', () => {
    it('makes user logged out', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      const state = reducer(given.previousState, logout());

      expect(state.accessToken).toBe('');
    });
  });

  describe('setReviews', () => {
    const reviews = [
      {
        id: 1,
        name: '테스터',
        description: 'good',
        score: 1,
      },
    ];
    it('changes reviews', () => {
      const state = reducer(given.previousState, setReviews(reviews));

      expect(state.restaurant.reviews).toHaveLength(reviews.length);
    });
  });

  describe('changeReviewField', () => {
    it('changes review field', () => {
      const state = reducer(
        given.previousState,
        changeReviewField({ name: 'score', value: 5 }),
      );

      expect(state.reviewField).toEqual({
        score: 5,
        description: '',
      });
    });
  });

  describe('clearReviewField', () => {
    it('clears review field', () => {
      given('reviewField', () => ({
        score: '5',
        description: 'very ultra super good',
      }));

      const state = reducer(
        given.previousState,
        clearReviewField(),
      );

      expect(state.reviewField).toEqual({
        score: '',
        description: '',
      });
    });
  });
});
