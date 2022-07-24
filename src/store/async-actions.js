import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from '@/services/api';

import { saveItem } from '@/services/stroage';

import {
  clearLoginFields,
  clearReviewFields,
  setAccessToken,
  setCategories,
  setRegions,
  setRestaurant,
  setRestaurants,
  setReviews,
} from './actions';

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

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    if (!email || !password) {
      return;
    }

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
    dispatch(clearLoginFields());
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, reviewFields: { score, description } } = getState();

    if (!score || !description) {
      return;
    }

    await postReview({
      accessToken,
      restaurantId,
      score,
      description,
    });

    dispatch(clearReviewFields());

    const { reviews } = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(reviews));
  };
}
