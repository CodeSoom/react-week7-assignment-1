export default function Reviews({ reviews }) {
  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.name}</p>
            <p>
              {review.score}
              점
            </p>
            <p>{review.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
