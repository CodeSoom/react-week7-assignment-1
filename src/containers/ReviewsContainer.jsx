import { useSelector } from 'react-redux';

import Reviews from '../components/Reviews';

import { get } from '../utils';

export default function ReviewsContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  if (!restaurant.reviews || !restaurant.reviews.length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <>
      {restaurant.reviews
        && (
          <Reviews reviews={restaurant.reviews} />
        )}
    </>
  );
}
