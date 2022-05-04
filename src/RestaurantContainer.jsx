import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

function ReviewForm() {
  return (
    <>
      <div>
        <label htmlFor="review-score">평점</label>
        <input
          type="number"
          name="review-score"
          id="review-score"
          placeholder="리뷰 평점을 입력해주세요."
          value=""
        />
      </div>
      <div>
        <label htmlFor="review-description">리뷰 내용</label>
        <input
          type="text"
          name="review-description"
          id="review-description"
          placeholder="리뷰 내용을 입력해주세요."
          value=""
        />
      </div>
    </>
  );
}

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm />
    </>
  );
}
