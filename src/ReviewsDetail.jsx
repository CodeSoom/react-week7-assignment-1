import React from 'react';

export default function ReviewDetail({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      {reviews.map(({
        id,
        name,
        score,
        description,
      }) => ((
        <li key={id}>
          <p>{`${name}`}</p>
          <p>{`${score}점`}</p>
          <p>{`${description}`}</p>
        </li>
      )))}
    </>
  );
}
