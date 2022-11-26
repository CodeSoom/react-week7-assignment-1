export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p>리뷰가 없어요!</p>;
  }

  return (
    <ul>
      {
        [...reviews].reverse().map((review) => (
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
