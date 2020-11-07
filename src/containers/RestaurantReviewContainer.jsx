import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantReview from '../components/RestaurantReview';
import { get } from '../utils';
import {
  setScore,
  setDescription,
  writeReview,
} from '../redux/actions';

export default function RestaurantReviewContainer({ restaurantId }) {
  const { description, score } = useSelector(get('review'));

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(writeReview({ restaurantId }));
  }

  function handleChangeDescription(value) {
    dispatch(setDescription(value));
  }

  function handleChangeScore(value) {
    dispatch(setScore(value));
  }

  return (
    <RestaurantReview
      description={description}
      score={score}
      onClick={handleClick}
      onChangeScore={handleChangeScore}
      onChangeDescription={handleChangeDescription}
    />
  );
}
