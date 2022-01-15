// 관심사: 상태바꿔주기
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

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

  return (
    <>
      {accessToken
        ? (
          <>
            <RestaurantDetail
              restaurant={restaurant}
              reviews={reviews}
            />
            <ReviewForm
              onChangeField={handleChangeField}
              onClickSubmit={handleClickSubmit}
              reviews={reviews}
            />
          </>
        )
        : (
          <RestaurantDetail
            restaurant={restaurant}
            reviews={reviews}
          />
        )}
    </>
  );
}
