import MenuItems from './MenuItems';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default function RestaurantDetail({
  restaurant, accessToken, fields, onSubmit, onChange,
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
      {accessToken ? (
        <ReviewForm
          fields={fields}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      ) : (
        null
      )}
      <ReviewList reviews={reviews} />
    </div>
  );
}
