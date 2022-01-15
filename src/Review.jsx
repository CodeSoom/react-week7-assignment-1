// 관심사: 상태그려주기
export default function Review({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {`${review.name} | ${review.score} | ${review.description}`}
          </li>
        ))}
      </ul>
    </>
  );
}
