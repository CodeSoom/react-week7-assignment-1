import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  fetchLogin,
  fetchAddReview,
} from './services/api';

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

export function handleLoginForm(key, value) {
  return {
    type: 'handleLoginForm',
    payload: { key, value },
  };
}

export function handleReviewForm(key, value) {
  return {
    type: 'handleReviewForm',
    payload: { key, value },
  };
}

export function setAccessToken(token) {
  return {
    type: 'setAccessToken',
    payload: { token },
  };
}

export function resetReviewForm() {
  return {
    type: 'resetReviewForm',
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

export function requestLogin() {
  return async (dispatch, getState) => {
    const {
      loginForm,
    } = getState();

    const token = await fetchLogin(loginForm);
    dispatch(setAccessToken(token));
  };
}

export function requestReviewPost() {
  return async (dispatch, getState) => {
    const {
      reviewForm,
    } = getState();

    await fetchAddReview(reviewForm);
    dispatch(resetReviewForm());
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}
