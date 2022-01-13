import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      <RestaurantContainer restaurantId={id} />
      <div>
        <label htmlFor="rating-input">
          평점
        </label>
        <input
          id="rating-input"
          type="number"
          name="rating"
        />
      </div>
      <div>
        <label htmlFor="review-input">
          리뷰
        </label>
        <input
          id="review-input"
          type="number"
          name="review"
        />
      </div>
    </div>
  );
}
