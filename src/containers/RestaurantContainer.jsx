import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setReviewInput, submitReview } from '../store/actions';

import Restaurant from '../components/Restaurant';
import ReviewForm from '../components/ReviewForm';

import { get } from '../utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  const { accessToken } = useSelector(get('session'));

  const dispatch = useDispatch();

  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    dispatch(setReviewInput(name, value));
  }

  function handleSubmitForm(ev) {
    ev.preventDefault();
    dispatch(submitReview());
  }

  return (
    <>
      <Restaurant restaurant={restaurant} />
      {
        accessToken &&
        <ReviewForm
          onChange={handleChangeInput}
          onSubmit={handleSubmitForm}
        />
      }
    </>
  );
}
