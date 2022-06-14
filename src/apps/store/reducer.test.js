import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurantDetail,
  setLoading,
  setError,
  setAccessToken,
  selectRegion,
  selectCategory,
  setLoginFields,
} from './actions';

describe('reducer', () => {
  context('default reducer', () => {
    it('returns initialState', () => {
      const initialState = {
        regions: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
        categories: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
        restaurants: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
        restaurantDetail: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: {},
        },
        selectedRegion: null,
        selectedCategory: null,
        loginFields: {
          email: '',
          password: '',
        },
        auth: {
          accessToken: null,
          isLoading: false,
          isError: false,
          errorMessage: '',
        },
      };
      const state = reducer();
      expect(state).toEqual(initialState);
    });
  });
  context('when previous state is undefined', () => {
    const initialState = {
      regions: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [],
      },
      categories: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [],
      },
      restaurants: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [],
      },
      restaurantDetail: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: {},
      },
      selectedRegion: null,
      selectedCategory: null,
      loginFields: {
        email: '',
        password: '',
      },
      auth: {
        accessToken: null,
        isLoading: false,
        isError: false,
        errorMessage: '',
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
        regions: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions.data).toEqual(regions);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories.data).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants.data).toEqual(restaurants);
    });
  });

  describe('setRestaurantDetail', () => {
    it('changes restaurantDetail', () => {
      const initialState = {
        restaurantDetail: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: {},
        },
      };

      const restaurantDetail = {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        menuItems: [
          {
            id: 1,
            restaurantId: 1,
            name: '비빔밥',
          },
        ],
      };

      const state = reducer(initialState, setRestaurantDetail(restaurantDetail));

      expect(state.restaurantDetail.data.name).toBe('양천주가');
    });
  });

  describe('setLoading', () => {
    it('isError becomes false and errorMessage becomes empty value and changes isLoading', () => {
      const initialState = {
        restaurantDetail: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: {},
        },
      };

      const state = reducer(initialState, setLoading('restaurantDetail', true));

      expect(state.restaurantDetail.isLoading).toBe(true);
    });
  });

  describe('setError', () => {
    it('isLoading becomes false and changes isError and errorMessage', () => {
      const initialState = {
        restaurantDetail: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: {},
        },
      };

      const state = reducer(initialState, setError('restaurantDetail', '에러발생'));

      expect(state.restaurantDetail.isLoading).toBe(false);
      expect(state.restaurantDetail.isError).toBe(true);
      expect(state.restaurantDetail.errorMessage).toBe('에러발생');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: {
          data: [
            { id: 1, name: '서울' },
          ],
        },
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
        categories: {
          data: [
            { id: 1, name: '한식' },
          ],
        },
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
    it('set accessToken and initialize status', () => {
      const initialState = {
        auth: {
          accessToken: null,
          isLoading: false,
          isError: false,
          errorMessage: '',
        },
      };

      const state = reducer(initialState, setAccessToken('accessToken'));

      expect(state.auth.accessToken).toBe('accessToken');
    });
  });

  describe('setLoginFields', () => {
    it('change login field', () => {
      const initialState = {
        loginFields: {
          email: '',
          password: '',
        },
      };

      const state = reducer(initialState, setLoginFields('email', 'tester@example.com'));

      expect(state.loginFields.email).toBe('tester@example.com');
    });
  });
});
