import { useParams } from 'react-router-dom';

import RestaurantContainer from '../containers/RestaurantContainer';
import ReviewFormContainer from '../containers/ReviewFormContainer';
import ReviewsContainer from '../containers/ReviewsContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <>
      <RestaurantContainer restaurantId={id} />
      <ReviewFormContainer restaurantId={id} />
      <ReviewsContainer />
    </>
  );
}
