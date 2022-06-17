import { setError, setLoading } from '../../apps/store/actions';

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

export function setReviews({ score, description }) {
  return {
    type: 'setReviews',
    payload: {
      score,
      description,
    },
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
      await dispatch(setReviews({ score, description }));
    } catch (error) {
      dispatch(setError('reviews', error.message));
    }
  };
}
