// 관심사: 상태그려주기
export default function Review({ reviews }) {
  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {sortedReviews.map((review) => (
          <li key={review.id}>
            {`${review.name} | ${review.score} | ${review.description}`}
          </li>
        ))}
      </ul>
    </>
  );
}
