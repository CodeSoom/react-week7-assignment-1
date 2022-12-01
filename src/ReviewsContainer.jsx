import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadReviews } from './actions';

import { get } from './utils';

import Reviews from './Reviews';

export default function ReviewsContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviews({ restaurantId }));
  }, []);

  const reviews = useSelector(get('reviews'));

  if (reviews.length === 0) {
    return <p>리뷰가 없습니다!</p>;
  }

  return (
    <Reviews reviews={reviews} />
  );
}
