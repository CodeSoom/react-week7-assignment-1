import MenuItems from './MenuItems';
import ReviewContainer from './ReviewContainer';

export default function RestaurantDetail({ reviews, restaurant }) {
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
      <ReviewContainer reviews={reviews} />
    </div>
  );
}
