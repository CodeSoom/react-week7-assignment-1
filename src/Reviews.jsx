export default function Reviews({ reviews }) {
  if (reviews.length === 0) {
    return null;
  }
  return (
    <ul>
      {
        reviews.map((review) => (
          <li key={review.id}>
            <p>{review.name}</p>
            <p>{review.score}</p>
            <p>{review.description}</p>
          </li>
        ))
      }
    </ul>
  );
}
