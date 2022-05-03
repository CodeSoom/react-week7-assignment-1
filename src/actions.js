import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';

import { saveItem } from './services/storage';

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

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
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

export function setErrorMessage(errorMessage) {
  return {
    type: 'setErrorMessage',
    payload: { errorMessage },
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, reviewFields } = getState();
    const { score, description } = reviewFields;

    try {
      const data = await postReview({
        accessToken, restaurantId, score, description,
      });

      if (data) {
        dispatch(setErrorMessage(''));
        dispatch(loadRestaurant({ restaurantId }));

        return;
      }

      dispatch(setErrorMessage('리뷰 정보를 다시 입력해 주세요.'));
    } catch (e) {
      dispatch(setErrorMessage(e.message));
    }
  };
}

export function changeReviewFields(reviewFields) {
  return {
    type: 'changeReviewFields',
    payload: { reviewFields },
  };
}

export function changeLoginFields(loginFields) {
  return {
    type: 'changeLoginFields',
    payload: { loginFields },
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields } = getState();
    const { email, password } = loginFields;

    try {
      const accessToken = await postLogin({ email, password });

      if (accessToken?.length) {
        dispatch(setErrorMessage(''));
        saveItem({ key: 'accessToken', value: accessToken });

        dispatch(setAccessToken(accessToken));

        return;
      }

      dispatch(setErrorMessage('로그인 정보를 다시 입력해 주세요.'));
    } catch (e) {
      dispatch(setErrorMessage(e.message));
    }
  };
}

export function logout() {
  return {
    type: 'logout',
  };
}
