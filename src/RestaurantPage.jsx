import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';
import ReviewFormContainer from './ReviewFormContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <>
      <RestaurantContainer restaurantId={id} />
      <ReviewFormContainer />
    </>
  );
}
