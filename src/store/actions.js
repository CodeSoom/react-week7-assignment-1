import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postSession,
  postReview,
} from '../services/api';

import {
  setItemToStorage,
  removeItemFromStorage,
 } from '../services/storage';

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
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

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

export function setRestaurant(restaurant) {
  return {
    type: 'setRestaurant',
    payload: { restaurant },
  };
}

export function getRestaurantById(restaurantId) {
  return async (dispatch) => {
    if (!restaurantId) {
      return;
    }

    const restaurant = await fetchRestaurant({ restaurantId });
    dispatch(setRestaurant(restaurant));
  };
}

export function setSessionInput(name, value) {
  return {
    type: 'setSessionInput',
    payload: {
      sessionInput: {
        [name]: value,
      },
    },
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function login() {
  return async (dispatch, getState) => {
    const { session: { input: { email, password } } } = getState();

    if (!email || !password) {
      return;
    }

    try {
      const { accessToken } = await postSession({ email, password });
      dispatch(setAccessToken(accessToken));
      setItemToStorage('accessToken', accessToken);
    } catch (e) {
      // todo: error action
    }
  };
}

export function logout() {
  removeItemFromStorage('accessToken');
  return setAccessToken(null);
}

export function setReviewInput(name, value) {
  return {
    type: 'setReviewInput',
    payload: {
      reviewInput: {
        [name]: value,
      },
    },
  };
}

export function submitReview() {
  return async (dispatch, getState) => {
    const {
      session: { accessToken },
      restaurant: { id:restaurantId },
      review: { input: { score, description } },
    } = getState();

    if (!score || !description) {
      return;
    }

    try {
      await postReview({ accessToken, restaurantId, score, description });
      dispatch(getRestaurantById(restaurantId));
    } catch (e) {
      // todo: error action
    }
  };
}
