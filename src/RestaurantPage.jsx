import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';
import ReviewFormContainer from './ReviewFormContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  const accessToken = useSelector((state) => state.accessToken);

  return (
    <>
      <RestaurantContainer restaurantId={id} />
      {(accessToken)
        ? <ReviewFormContainer />
        : null}
    </>
  );
}
