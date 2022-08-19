import { useSelector } from 'react-redux';

import { get } from './utils';

export default function ReviewsContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return null;
  }

  const { reviews } = restaurant;

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews && reviews.map((review) => {
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
