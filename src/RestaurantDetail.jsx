import MenuItems from './MenuItems';
import ReviewList from './ReviewList';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;
  // TODO: get reviews from parent
  const reviews = [];

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
      <ReviewList reviews={reviews} />
    </div>
  );
}
