export default function RestaurantReviews({ reviews }) {
  return (
    <ul>
      {reviews.map(({
        id,
        name, score, description,
      }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{score}</p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
