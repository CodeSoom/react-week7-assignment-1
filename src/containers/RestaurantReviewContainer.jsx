import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantReview from '../components/RestaurantReview';
import { get } from '../utils';
// import {
//   setReview,
//   postReview,
// } from '../redux/actions';

export default function RestaurantReviewContainer() {
  const { description, score } = useSelector(get('review'));

  // const dispatch = useDispatch();

  // function handleClick() {
  //   dispatch(setReview());
  // }

  // function handleChange() {
  //   dispatch(postReview());
  // }

  return (
    <RestaurantReview
      description={description}
      score={score}
      // onClick={handleClick}
      // onChange={handleChange}
    />
  );
}
