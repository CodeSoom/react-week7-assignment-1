export default function ReviewList({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <div>{review.name}</div>
            <div>{review.score}</div>
            <div>{review.description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
