export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return <p>등록된 리뷰가 없어요!</p>;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map((review) => (
        <li key={review.id}>
          <div>{review.name}</div>
          <div>{review.score}</div>
          <div>{review.description}</div>
        </li>
      ))}
    </ul>
  );
}
