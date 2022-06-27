import reducer from '../../apps/store/reducer';

import { setRestaurantDetail, setRestaurants } from './restaurantActions';

describe('restaurantReducer', () => {
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
});
