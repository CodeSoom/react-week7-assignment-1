export default function RestaurantReviews({ restaurant }) {
  const { reviews } = restaurant;

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews && reviews.reverse().map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            {name}
            <br />
            {score}
            점
            <br />
            {description}
          </li>
        ))}
      </ul>
    </>
  );
}
