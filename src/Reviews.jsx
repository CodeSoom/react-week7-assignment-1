import React from 'react';

function ReviewItems({ reviews }) {
  if (reviews.length === 0) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <ul>
      {reviews.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          <p>{name}</p>
          <p>
            {score}
            점
          </p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Reviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ReviewItems reviews={reviews} />
    </>
  );
}
