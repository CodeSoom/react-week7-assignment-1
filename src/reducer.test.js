import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  changeReviewField,
  clearReviewFields,
  setAccessToken,
  setReviews,
  logout,
} from './actions';

import LOGIN_FIELDS from '../fixtures/loginFields';
import REVIEW_FIELDS from '../fixtures/reviewFields';
import REVIEWS from '../fixtures/reviews';

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
        score: '',
        description: '',
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

  describe('setAccessToken', () => {
    it('accessToken을 가져온다', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('TOKEN'));

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('setReviews', () => {
    it('리뷰를 가져온다', () => {
      const initialState = {
        restaurant: {
          reviews: [],
        },
      };

      const {
        restaurant: { reviews },
      } = reducer(initialState, setReviews(REVIEWS));

      expect(reviews).toHaveLength(REVIEWS.length);
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
    const initialState = {
      loginFields: {
        email: 'email',
        password: 'password',
      },
    };

    context('이메일을 입력할 시', () => {
      it('이메일만 바뀐다', () => {
        const state = reducer(initialState, changeLoginField(LOGIN_FIELDS[0]));

        expect(state.loginFields.email).toBe('test@test');
        expect(state.loginFields.password).toBe('password');
      });
    });

    context('비밀번호를 입력할 시', () => {
      it('비밀번호만 바뀐다', () => {
        const state = reducer(initialState, changeLoginField(LOGIN_FIELDS[1]));

        expect(state.loginFields.email).toBe('email');
        expect(state.loginFields.password).toBe('1234');
      });
    });
  });

  describe('clearReviewFields', () => {
    it('review field를 지워준다', () => {
      const initialState = {
        reviewFields: {
          score: '5',
          description: 'awesome',
        },
      };

      const state = reducer(initialState, clearReviewFields());

      expect(state.reviewFields.score).toBe('');
      expect(state.reviewFields.description).toBe('');
    });
  });

  describe('logout', () => {
    const initialState = {
      accessToken: '',
    };

    it('accessToken을 변경한다', () => {
      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe('');
    });
  });

  describe('changeReviewField', () => {
    const initialState = {
      reviewFields: {
        score: '1',
        description: '우욱',
      },
    };

    context('평점을 입력할 시', () => {
      it('평점만 바뀐다', () => {
        const state = reducer(
          initialState,
          changeReviewField(REVIEW_FIELDS[0]),
        );

        expect(state.reviewFields.score).toBe('5');
        expect(state.reviewFields.description).toBe('우욱');
      });
    });

    context('리뷰 내용을 입력할 시', () => {
      it('리뷰 내용만 바뀐다', () => {
        const state = reducer(
          initialState,
          changeReviewField(REVIEW_FIELDS[1]),
        );

        expect(state.reviewFields.score).toBe('1');
        expect(state.reviewFields.description).toBe('맛있어요👍');
      });
    });
  });
});
