import MenuItems from './MenuItems';
import ReviewList from './ReviewList';
import TextField from './TextField';

// TODO: Make it right
function ReviewForm() {
  return (
    <>
      <TextField
        label="평점"
        type="number"
        name="score"
        value={3}
        onChange={() => {}}
      />
      <TextField
        label="리뷰 내용"
        type="text"
        name="review"
        value="맛있어요"
        onChange={() => {}}
      />
    </>
  );
}

export default function RestaurantDetail({ restaurant, accessToken }) {
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
        <ReviewForm />
      ) : (
        null
      )}
      <ReviewList reviews={reviews} />
    </div>
  );
}
