export default function Reviews({ reviews }) {
  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {sortedReviews.map((review) => (
          <li key={review.id}>
            {review.name}
            <br />
            {review.score}
            점
            <br />
            {review.description}
          </li>
        ))}
      </ul>
    </>
  );
}
