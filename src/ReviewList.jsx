import React from 'react';

export default function ReviewList({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <div>
      <h3>리뷰</h3>
      <ul>
        {reviews.sort((a, b) => b.id - a.id).map(({
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
    </div>
  );
}
