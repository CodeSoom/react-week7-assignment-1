import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const {
    name, address, menuItems, reviews = [],
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
      <h3>리뷰</h3>
      <ul>
        {reviews.map(({
          id, name: reviewerName, score, description,
        }) => (
          <li key={id}>
            {`${reviewerName}
            ${score}
            ${description}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
