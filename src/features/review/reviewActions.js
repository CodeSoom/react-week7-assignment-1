import { setError, setLoading } from '../../apps/store/actions';

import { fetchRestaurantById } from '../restaurant/restaurantApi';

import { createReview } from './reviewApi';

export function setReviewFields(name, value) {
  return {
    type: 'setReviewFields',
    payload: {
      name,
      value,
    },
  };
}

export function setReviews(reviews) {
  return {
    type: 'setReviews',
    payload: {
      reviews,
    },
  };
}

export function loadReviews(id) {
  return async (dispatch) => {
    const data = await fetchRestaurantById(id);
    dispatch(setReviews(data.reviews));
  };
}

export function postReview(restaurantId) {
  return async (dispatch, getState) => {
    try {
      const { reviewFields: { score, description }, auth: { accessToken } } = getState();
      if (!(String(score) && description)) {
        return;
      }

      dispatch(setLoading('reviews', true));

      await createReview(score, description, restaurantId, accessToken);
      dispatch(loadReviews(restaurantId));
    } catch (error) {
      dispatch(setError('reviews', error.message));
    }
  };
}
