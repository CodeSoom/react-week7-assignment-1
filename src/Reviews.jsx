import React from 'react';

export default function Reviews({ reviews }) {
  if (reviews.length === 0) {
    return (
      <>
        <h2>리뷰</h2>
        <p>리뷰가 없어요!</p>
      </>
    );
  }

  return (
    <>
      <h2>리뷰</h2>
      {}
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
    </>
  );
}
