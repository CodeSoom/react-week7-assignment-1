import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from '../services/api';

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

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { email, password } = getState();
    const accessToken = await postLogin({ email, password });

    dispatch(setAccessToken(accessToken));
  };
}

export function setEmail(email) {
  return {
    type: 'setEmail',
    payload: { email },
  };
}

export function setPassword(password) {
  return {
    type: 'setPassword',
    payload: { password },
  };
}

export function setDescription(description) {
  return {
    type: 'setDescription',
    payload: { description },
  };
}

export function setScore(score) {
  return {
    type: 'setScore',
    payload: { score },
  };
}

export function writeReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, review: { score, description } } = getState();

    await postReview({
      accessToken, restaurantId, score, description,
    });

    dispatch(loadRestaurant({ restaurantId }));
  };
}

export function deleteAccessToken() {
  return {
    type: 'deleteAccessToken',
  };
}
