import React from 'react';

export default function ReviewItems({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <ul>
      {reviews
        .sort((a, b) => (b.id - a.id))
        .map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <p>{name}</p>
            <p>
              {score}점
            </p>
            <p>{description}</p>
          </li>
        ))}
    </ul>
  );
}