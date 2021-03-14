import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from '@api';
import { saveItem } from '../services/storage';

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

export function setLoginFields(loginFields) {
  return {
    type: 'setLoginFields',
    payload: { loginFields },
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

export function setReviews(reviews) {
  return {
    type: 'setReviews',
    payload: { reviews },
  };
}

export function logOut() {
  return {
    type: 'logOut',
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

    dispatch(setReviews(restaurant.reviews));
  };
}

export function loadReviews({ restaurantId }) {
  return async (dispatch) => {
    const { reviews } = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(reviews));
  };
}

export function requestLogin({ logInFields }) {
  return async (dispatch) => {
    const { email, password } = logInFields;

    dispatch(setLoginFields(logInFields));

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export function requestReview({ reviewFields }) {
  return async () => {
    const {
      score,
      description,
      restaurantId,
      accessToken,
    } = reviewFields;

    await postReview({
      score,
      description,
      restaurantId,
      accessToken,
    });
  };
}
