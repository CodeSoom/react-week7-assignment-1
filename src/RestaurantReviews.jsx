import React from 'react';

export default function RestaurantReviews({ restaurant }) {
  const { reviews } = restaurant;

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        { reviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <p>
              작성자:
              {' '}
              {name}
            </p>
            <p>
              평점:
              {' '}
              {score}
            </p>
            <p>
              리뷰 내용:
              {' '}
              {description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
