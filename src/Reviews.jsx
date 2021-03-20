import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map(({ id, description }) => (
          <li key={id}>{description}</li>
        ))}
      </ul>
    </>
  );
}
