// 관심사: 상태바꿔주기
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Review from './Review';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const reviews = useSelector(get('reviews'));
  const accessToken = useSelector(get('accessToken'));

  function handleChangeField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleClickSubmit() {
    dispatch(sendReview());
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  // ToDo: reviews는 Reviews 에 따로 빼서 넘겨주기
  return (
    <>
      <RestaurantDetail
        restaurant={restaurant}
      />
      {accessToken
        ? (
          <ReviewForm
            onChangeField={handleChangeField}
            onClickSubmit={handleClickSubmit}
          />
        )
        : null}
      <Review
        reviews={reviews}
      />
    </>
  );
}
