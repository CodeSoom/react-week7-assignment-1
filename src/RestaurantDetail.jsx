import MenuItems from './MenuItems';

import ReviewForm from './components/restaurant/ReviewForm';

export default function RestaurantDetail({ restaurant, onChangeReviewForm, reviewFields }) {
  const { name, address, menuItems } = restaurant;
  const { score, description } = reviewFields;

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
        score={score}
        description={description}
        onChange={onChangeReviewForm}
      />

      {/* reviews */}
    </div>
  );
}
