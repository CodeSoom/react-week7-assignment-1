import reducer from './reducer';

import {
  setLoading,
  setError,
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
          isLogin: false,
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
        isLogin: false,
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
});
