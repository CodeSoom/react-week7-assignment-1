import MenuItems from './MenuItems';

import ReviewForm from './components/restaurant/ReviewForm';

export default function RestaurantDetail({ restaurant }) {
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

      <ReviewForm />

      {/* reviews */}
    </div>
  );
}
