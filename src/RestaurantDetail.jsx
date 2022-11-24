import MenuItems from './MenuItems';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

export default function RestaurantDetail({
  restaurant, onChange, onSubmit, reviewFields, accessToken,
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
      {
        accessToken
          ? (
            <ReviewForm
              reviewFields={reviewFields}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          )
          : null
      }
      <Reviews reviews={reviews} />
    </div>
  );
}
