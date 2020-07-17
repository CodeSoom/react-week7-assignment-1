import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  fetchAccessToken,
  postReview,
} from './services/api';

import {
  loadItem,
  saveItem,
  removeItem,
} from './services/storage';

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
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectedRegion: region, selectedCategory: category } = getState();

    if (!region || !category) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });
    const accessToken = loadItem('accessToken');

    if (accessToken) {
      dispatch(setAccessToken(accessToken));
    }
    dispatch(setRestaurant(restaurant));
  };
}

export function changeLoginField({ name, value }) {
  return {
    type: 'changeLoginField',
    payload: { name, value },
  };
}

export function login() {
  return async (dispatch, getState) => {
    const { loginFields } = getState();

    if (!loginFields) {
      return;
    }

    const accessToken = await fetchAccessToken(loginFields);
    if (accessToken !== undefined) {
      saveItem('accessToken', accessToken);
      dispatch(setAccessToken(accessToken));
    }
  };
}

export function logout() {
  removeItem('accessToken');
  return {
    type: 'logout',
    payload: { accessToken: '' },
  };
}

export function changeReviewField({ name, value }) {
  return {
    type: 'changeReviewField',
    payload: { name, value },
  };
}

export function addReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, reviewField } = getState();

    if ((reviewField || accessToken || restaurantId) === undefined) {
      return;
    }

    await postReview({ accessToken, restaurantId, reviewField });

    dispatch(loadRestaurant({ restaurantId }));
  };
}
