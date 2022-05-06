import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';
import { clear, saveItem } from './services/storage';

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

export function setLoginFields({ name, value }) {
  return {
    type: 'setLoginFields',
    payload: { name, value },
  };
}

export function setReviewFields({ name, value }) {
  return {
    type: 'setReviewFields',
    payload: { name, value },
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

export function setAccessToken({ accessToken }) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function requestSession() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    const { accessToken } = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken({ accessToken }));
  };
}

export function clearSession() {
  clear();

  return {
    type: 'clearSession',
  };
}

export function submitReview() {
  return async (dispatch, getState) => {
    const {
      accessToken,
      restaurant,
      reviewFields: { score, description },
    } = getState();

    await postReview({
      accessToken, restaurantId: restaurant.id, score, description,
    });

    const lastReview = restaurant.reviews.slice(-1).pop();

    const review = {
      id: lastReview.id + 1,
      restaurantId: restaurant.id,
      name: '테스터',
      score: parseInt(score, 10),
      description,
    };

    dispatch(setRestaurant({
      ...restaurant,
      reviews: [
        review,
        ...restaurant.reviews,
      ],
    }));
  };
}
