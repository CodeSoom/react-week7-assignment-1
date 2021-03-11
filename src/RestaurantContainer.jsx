import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
  changeReviewField,
  saveReview,
} from './actions';

import { get } from './utils';

function RestaurantReviews({ restaurant }) {
  const { reviews } = restaurant;

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        { reviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <p>
              작성자:
              {' '}
              {name}
            </p>
            <p>
              평점:
              {' '}
              {score}
            </p>
            <p>
              리뷰 내용:
              {' '}
              {description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const { score, description } = useSelector(get('reviewFields'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleClick() {
    dispatch(saveReview());
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      { accessToken
        ? (
          <ReviewForm
            fields={{ score, description }}
            onChange={handleChange}
            onClick={handleClick}
          />
        )
        : null}
      <RestaurantReviews restaurant={restaurant} />
    </>
  );
}
