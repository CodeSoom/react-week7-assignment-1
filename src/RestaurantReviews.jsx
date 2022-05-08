import Reviews from './Reviews';

export default function RestaurantReviews({ reviews }) {
  return (
    <div>
      <h3>리뷰</h3>
      <Reviews reviews={reviews} />
    </div>
  );
}
