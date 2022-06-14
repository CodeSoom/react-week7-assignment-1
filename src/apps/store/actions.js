import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantById,
  authorize,
} from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
      key: 'regions',
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
      key: 'categories',
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  };
}

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

export function setLoading(key, isLoading) {
  return {
    type: 'setLoading',
    payload: {
      key,
      isLoading,
      isError: false,
      errorMessage: '',
    },
  };
}

export function setError(key, errorMessage) {
  return {
    type: 'setError',
    payload: {
      key,
      isLoading: false,
      isError: true,
      errorMessage,
    },
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      accessToken,
    },
  };
}

export function setLoginFields(name, value) {
  return {
    type: 'setLoginFields',
    payload: {
      name,
      value,
    },
  };
}

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: { categoryId },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    try {
      dispatch(setLoading('regions', true));
      dispatch(setLoading('categories', true));

      const regions = await fetchRegions();
      dispatch(setRegions(regions));

      const categories = await fetchCategories();
      dispatch(setCategories(categories));
    } catch (error) {
      dispatch(setError('regions', error.message));
      dispatch(setError('categories', error.message));
    }
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

export function login() {
  return async (dispatch, getState) => {
    try {
      const { loginFields: { email, password } } = getState();
      if (!(email && password)) {
        return;
      }

      dispatch(setLoading('loginFields', true));

      const { accessToken } = await authorize();
      dispatch(setAccessToken(accessToken));
    } catch (error) {
      dispatch(setError('loginFields', error.message));
    }
  };
}
