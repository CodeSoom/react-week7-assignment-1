export default function Reviews({ restaurant }) {
  const { reviews } = restaurant;

  return (
    <div>
      <h3>리뷰</h3>
      {/* <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <div>
              {review.name}
            </div>
            <div>
              {review.score}
            </div>
            <div>
              {review.description}
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
