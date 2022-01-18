import { tenOfRecentReviews } from '../utils';

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const tenOfSortedReviews = tenOfRecentReviews(reviews);

  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {tenOfSortedReviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            {name}
            <br />
            {score}
            <br />
            {description}
          </li>
        ))}
      </ul>
    </>
  );
}
