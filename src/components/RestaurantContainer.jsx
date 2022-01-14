import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  changeReviewField,
  loadRestaurant, sendReview,
} from '../modules/actions';

import { get } from '../modules/utils';
import TextField from './TextField';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken
        ? (
          <>
            <TextField
              id="review-score"
              label="Score"
              type="number"
              name="score"
              onChange={handleChange}
            />
            <TextField
              id="review-description"
              label="Description"
              name="description"
              onChange={handleChange}
            />
            <button type="button" onClick={handleSubmit}>리뷰 남기기</button>
          </>
        )
        : null}
      <h2>리뷰</h2>
      <ul>
        {restaurant.reviews.slice(-10).sort((a, b) => (Number(b.id) - Number(a.id))).map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <div>{name}</div>
            <div>{score}</div>
            <div>{description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
