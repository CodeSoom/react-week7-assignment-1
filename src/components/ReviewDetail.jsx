export default function ReviewDetail({ reviews }) {
  const reviewsReverse = reviews.reverse();

  return (
    <div>
      <h2>리뷰</h2>
      {reviewsReverse.map((review) => {
        const {
          id, name, score, description,
        } = review;

        return (
          <ul key={id}>
            <li>{name}</li>
            <li>{score}</li>
            <li>{description}</li>
          </ul>
        );
      })}
    </div>
  );
}
