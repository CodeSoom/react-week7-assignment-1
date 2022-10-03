import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  setAccessToken,
  selectRegion,
  selectCategory,
  logout,
  changeLoginField,
  changeReviewField,
  clearReviewFields,
  setReviews,
} from './actions';

import RESTAURANT from '../fixtures/restaurant';
import LOGIN_FIELDS from '../fixtures/loginFields';
import REVIEW_FIELDS from '../fixtures/reviewFields';

describe('reducer', () => {
  context('when previous state is undefined', () => {
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
        error: '',
      },
      reviewFields: {
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
    context('when restaurant is null', () => {
      it('changes restaurant to be null', () => {
        const initialState = {
          restaurant: RESTAURANT,
        };

        const { restaurant } = reducer(initialState, setRestaurant(null));

        expect(restaurant).toBe(null);
      });
    });

    context('when restaurant exists', () => {
      it('changes restaurant', () => {
        const initialState = {
          restaurant: null,
        };

        const { restaurant } = reducer(initialState, setRestaurant(RESTAURANT));

        expect(restaurant.id).toBe(RESTAURANT.id);
        expect(restaurant.name).toBe(RESTAURANT.name);
        expect(restaurant.address).toBe(RESTAURANT.address);
        expect(restaurant.menuItems).toEqual(RESTAURANT.menuItems);

        const reverseReviews = [...RESTAURANT.reviews].sort((a, b) => b.id - a.id);

        restaurant.reviews.forEach((review, index) => {
          expect(review).toEqual(reverseReviews[index]);
        });
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes access token', () => {
      const initialState = {
        accessToken: '',
      };

      const { accessToken } = reducer(initialState, setAccessToken('TOKEN'));

      expect(accessToken).toBe('TOKEN');
    });
  });

  describe('logout', () => {
    it('removes access token', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const { accessToken } = reducer(initialState, logout());

      expect(accessToken).toBe('');
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
    const initialState = {
      loginFields: {
        email: '',
        password: '',
        error: '',
      },
    };

    const { email: EMAIL, password: PASSWORD } = LOGIN_FIELDS;

    context('when email is chaged', () => {
      it('changes email', () => {
        const { loginFields: { email } } = reducer(
          initialState,
          changeLoginField({
            name: 'email',
            value: EMAIL,
          }),
        );

        expect(email).toBe(EMAIL);
      });
    });

    context('when password is chaged', () => {
      it('changes password', () => {
        const { loginFields: { password } } = reducer(
          initialState,
          changeLoginField({
            name: 'password',
            value: PASSWORD,
          }),
        );

        expect(password).toBe(PASSWORD);
      });
    });

    context('when login fails', () => {
      it('changes error', () => {
        const { loginFields: { error } } = reducer(
          initialState,
          changeLoginField({
            name: 'error',
            value: 'E-mail, Password를 확인해주세요.',
          }),
        );

        expect(error).toBe('E-mail, Password를 확인해주세요.');
      });
    });
  });

  describe('changeReviewField', () => {
    const initialState = {
      reviewFields: {
        score: '',
        description: '',
      },
    };

    const { score: SCORE, description: DECRIPTION } = REVIEW_FIELDS;

    context('when review score is chaged', () => {
      it('changes review score', () => {
        const { reviewFields: { score } } = reducer(
          initialState,
          changeReviewField({ name: 'score', value: SCORE }),
        );

        expect(score).toBe(SCORE);
      });
    });

    context('when review description is chaged', () => {
      it('changes review description', () => {
        const { reviewFields: { description } } = reducer(
          initialState,
          changeReviewField({ name: 'description', value: DECRIPTION }),
        );

        expect(description).toBe(DECRIPTION);
      });
    });
  });

  describe('clearReviewFields', () => {
    const initialState = {
      reviewFields: REVIEW_FIELDS,
    };

    it('clears fields of review', () => {
      const { reviewFields: { score, description } } = reducer(
        initialState,
        clearReviewFields(),
      );

      expect(score).toBe('');
      expect(description).toBe('');
    });
  });

  describe('setReviews', () => {
    it('changes reviews of the current restaurant', () => {
      const REVIEWS = RESTAURANT.reviews;

      const initialState = {
        restaurant: {
          reviews: [],
        },
      };

      const { restaurant: { reviews } } = reducer(initialState, setReviews(REVIEWS));

      expect(reviews).toHaveLength(REVIEWS.length);
    });
  });
});
