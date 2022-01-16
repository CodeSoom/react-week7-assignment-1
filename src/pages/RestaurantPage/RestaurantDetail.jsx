import MenuItems from './MenuItems';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

export default function RestaurantDetail({ restaurant, onAddReview }) {
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
      <ReviewForm onSubmit={onAddReview} />
      <Reviews reviews={reviews} />
    </div>
  );
}
