export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  return ((
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <div>
            {review.name}
          </div>
          <div>
            {review.score}
            점
          </div>
          <div>
            {review.description}
          </div>
        </li>
      ))}
    </ul>
  ));
}
