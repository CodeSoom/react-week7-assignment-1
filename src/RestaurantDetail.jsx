import MenuItems from './MenuItems';
import ReviewList from './ReviewList';

export default function RestaurantDetail({ restaurant, reviews }) {
  const { name, address, menuItems } = restaurant;

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
