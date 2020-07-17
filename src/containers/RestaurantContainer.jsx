import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setReviewInput, submitReview, getRestaurantById } from '../store/actions';

import Restaurant from '../components/Restaurant';
import ReviewForm from '../components/ReviewForm';

import { get } from '../utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  const { input: { score, description } } = useSelector(get('review'));

  const { accessToken } = useSelector(get('session'));

  const dispatch = useDispatch();

  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    dispatch(setReviewInput(name, value));
  }

  async function handleSubmitForm(ev) {
    ev.preventDefault();
    await dispatch(submitReview());
    await dispatch(getRestaurantById(restaurant.id));
  }

  return (
    <>
      <Restaurant restaurant={restaurant} />
      {
        accessToken
        && (
          <ReviewForm
            score={score}
            description={description}
            onChange={handleChangeInput}
            onSubmit={handleSubmitForm}
          />
        )
      }
    </>
  );
}
