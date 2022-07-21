import MenuItems from './MenuItems';

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

      <form>
        <div>
          <label htmlFor="review-score">
            평점
          </label>
          <input
            id="review-score"
            name="score"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="review-description">
            리뷰 내용
          </label>
          <input
            id="review-description"
            name="description"
            type="number"
          />
        </div>
        <button type="submit">리뷰 남기기</button>
      </form>

      {/* reviews */}
    </div>
  );
}
