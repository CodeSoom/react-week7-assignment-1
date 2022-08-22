import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  setReviews,
  setAccessToken,
  clearAccessToken,
  clearReviewFields,
  selectRegion,
  selectCategory,
  changeLoginField,
  changeReviewField,
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
      accessToken: null,
      loginFields: {
        email: '',
        password: '',
      },
      reviewFields: {
        score: '',
        description: '',
      },
      reviews: [],
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

  describe('setReviews', () => {
    it('changes reviews', () => {
      const initialState = {
        reviews: [],
      };

      const reviews = [
        {
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        },
      ];

      const state = reducer(initialState, setReviews(reviews));

      expect(state.reviews).toHaveLength(1);
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
    it('changes accessToken', () => {
      const initialState = {
        accessToken: null,
      };

      const accessToken = 'ACCESS_TOKEN';

      const state = reducer(initialState, setAccessToken(accessToken));

      expect(state.accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('clearAccessToken', () => {
    it('clears accessToken', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(initialState, clearAccessToken());

      expect(state.accessToken).toBeNull();
    });
  });

  describe('clearReviewFields', () => {
    it('clears review fields', () => {
      const initialState = {
        reviewFields: {
          score: '5',
          description: '맛없음',
        },
      };

      const state = reducer(initialState, clearReviewFields());

      expect(state.reviewFields.score).toBe('');
      expect(state.reviewFields.description).toBe('');
    });
  });

  describe('changeLoginField', () => {
    it('changes login field', () => {
      const initialState = {
        loginFields: {
          email: '',
          password: '',
        },
      };

      const controls = [
        {
          name: 'email',
          value: 'tester@example.com',
        },
        {
          name: 'password',
          value: 'test',
        },
      ];

      controls.forEach(({ name, value }) => {
        const state = reducer(initialState, changeLoginField({ name, value }));

        expect(state.loginFields).toEqual({
          ...state.loginFields,
          [name]: value,
        });
      });
    });
  });

  describe('changeReviewField', () => {
    it('changes review field', () => {
      const initialState = {
        reviewFields: {
          description: '',
          content: '',
        },
      };

      const controls = [
        {
          name: 'score',
          value: '5',
        },
        {
          name: 'description',
          value: '맛있어~!~!',
        },
      ];

      controls.forEach(({ name, value }) => {
        const state = reducer(initialState, changeReviewField({ name, value }));

        expect(state.reviewFields).toEqual({
          ...state.reviewFields,
          [name]: value,
        });
      });
    });
  });
});
