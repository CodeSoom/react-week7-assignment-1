import { useSelector } from 'react-redux';

import { get } from './utils';

export default function ReviewsContainer() {
  const reviews = useSelector(get('reviews'));

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews && reviews.sort((a, b) => b.id - a.id).map((review) => {
          const {
            id, name, score, description,
          } = review;

          return (
            <li key={id}>
              {name}
              <br />
              {score}
              <br />
              {description}
              <p />
            </li>
          );
        })}
      </ul>
    </>
  );
}
