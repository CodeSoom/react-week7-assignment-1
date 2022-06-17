import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import { changeReviewField, loadRestaurant, sendReview } from './actions';

import { get } from './utils';
import ReviewForm from './ReviewForm';

function ReviewList({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.score}</div>
            <div>{item.description}</div>
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

  if (!restaurant) {
    return <p>Loading...</p>;
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
      {accessToken ? (
        <ReviewForm onChange={handleChange} onSubmit={handleSubmit} />
      ) : null}
      <ReviewList reviews={restaurant.reviews} />
    </>
  );
}
