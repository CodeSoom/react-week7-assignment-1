import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  updateUserLoginInputs,
  setAccessToken,
  updateReview,
  resetAccessToken,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      userLoginInputs: {
        email: '',
        password: '',
      },
      review: {
        score: '',
        description: '',
      },
      accessToken: '',
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
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

  describe('setAccessToken', () => {
    it('AccessToken을 저장한다.', () => {
      const initialState = { accessToken: '' };

      const state = reducer(initialState, setAccessToken('ACCESS_TOKEN'));

      expect(state.accessToken).toEqual('ACCESS_TOKEN');
    });
  });

  describe('resetAccessToken', () => {
    it('AccessToken을 reset한다.', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(initialState, resetAccessToken());

      expect(state.accessToken).toBe('');
    });
  });

  describe('resetLoginInput', () => {
    it('UserLoginInputs을 reset한다.', () => {
      const initialState = {
        userLoginInputs: { email: 'test@naver.com', password: '1234' },
      };

      const state = reducer(initialState, resetLoginInput());

      expect(state.userLoginInputs).toBe({ email: '', password: '' });
    });
  });

  describe('resetReviewInput', () => {
    it('Review를 reset한다.', () => {
      const initialState = {
        review: { score: '5', description: '예술이다' },
      };

      const state = reducer(initialState, resetReviewInput());

      expect(state.review).toBe({ score: '', description: '' });
    });
  });

  describe('updateUserLoginInputs', () => {
    it('로그인 입력을 업데이트한다.', () => {
      const initialState = {
        userLoginInputs: { email: '', password: '' },
      };

      const state = reducer(initialState, updateUserLoginInputs('email', 'test@naver.com'));

      expect(state.userLoginInputs.email).toEqual('test@naver.com');
    });
  });

  describe('updateReview', () => {
    it('리뷰 입력을 update한다.', () => {
      const initialState = { review: { score: '', description: '' } };

      const state = reducer(initialState, updateReview('score', '4'));

      expect(state.review.score).toEqual('4');
    });
  });
});
