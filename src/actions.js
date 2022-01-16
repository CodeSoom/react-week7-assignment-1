import * as api from './services/api';
import { setStorage } from './services/storage';

export const SET_LOGIN_FIELD = 'setLoginField';
export const SET_AUTHORIZED_TOKEN = 'setAuthorizedToken';
export const LOGOUT = 'logout';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function setRestaurant(restaurant) {
  return {
    type: 'setRestaurant',
    payload: { restaurant },
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
    const regions = await api.fetchRegions();
    dispatch(setRegions(regions));

    const categories = await api.fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

    if (!region || !category) {
      return;
    }

    const restaurants = await api.fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await api.fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export function setLoginField({ name, value }) {
  return {
    type: SET_LOGIN_FIELD,
    payload: {
      name,
      value,
    },
  };
}

export function setAuthorizedToken(token) {
  return {
    type: SET_AUTHORIZED_TOKEN,
    payload: {
      token,
    },
  };
}

export function logout() {
  setStorage('AuthorizedToken', '');

  return {
    type: LOGOUT,
  };
}

export function login() {
  return async (dispatch, getState) => {
    const { loginField: { email, password } } = getState();

    if (!email || !password) {
      return;
    }

    const authorizedToken = await api.login({ email, password });

    dispatch(setAuthorizedToken(authorizedToken));

    setStorage('AuthorizedToken', authorizedToken);
  };
}
