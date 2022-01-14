import { reviewsTo10 } from '../utils';

export default function Reviews({ reviews }) {
  const sortedReviews = reviewsTo10(reviews);

  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {sortedReviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            {name}<br />
            {score}<br />
            {description}
          </li>
        ))}
      </ul>
    </>
  );
}
