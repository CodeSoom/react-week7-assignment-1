import MenuItems from './MenuItems';

import ReviewForm from './components/restaurant/ReviewForm';
import Reviews from './components/restaurant/Reviews';

export default function RestaurantDetail({
  restaurant, onChangeReviewForm, reviewFields, onSubmitReviewForm,
}) {
  const {
    name, address, menuItems, reviews,
  } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />

      <ReviewForm
        reviewFields={reviewFields}
        onChange={onChangeReviewForm}
        onSubmit={onSubmitReviewForm}
      />

      <Reviews reviews={reviews} />
    </div>
  );
}
