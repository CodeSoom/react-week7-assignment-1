import { setError, setLoading } from '../../apps/store/actions';

import { fetchRestaurantById, fetchRestaurants } from './restaurantApi';

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
      key: 'restaurants',
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  };
}

export function setRestaurantDetail(restaurantDetail) {
  return {
    type: 'setRestaurantDetail',
    payload: {
      key: 'restaurantDetail',
      restaurantDetail,
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    try {
      const {
        selectedRegion: region,
        selectedCategory: category,
      } = getState();

      if (!region || !category) {
        return;
      }

      dispatch(setLoading('restaurants', true));

      const restaurants = await fetchRestaurants({
        regionName: region.name,
        categoryId: category.id,
      });
      dispatch(setRestaurants(restaurants));
    } catch (error) {
      dispatch(setError('restaurants', error.message));
    }
  };
}

export function loadRestaurantDetail(restaurantId) {
  return async (dispatch) => {
    try {
      if (!restaurantId) {
        return;
      }

      dispatch(setLoading('restaurantDetail', true));

      const restaurantDetail = await fetchRestaurantById(restaurantId);
      dispatch(setRestaurantDetail(restaurantDetail));
    } catch (error) {
      dispatch(setError('restaurantDetail', error.message));
    }
  };
}
