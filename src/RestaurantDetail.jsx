import MenuItems from './MenuItems';
import Reviews from './components/Reviews/Reviews';

export default function RestaurantDetail({ restaurant }) {
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
      <Reviews reviews={reviews} />
    </div>
  );
}
