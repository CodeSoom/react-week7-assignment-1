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
          <span>
            {`${name}`}
            <br />
          </span>
          <span>
            {`${score}점`}
            <br />
          </span>
          <span>
            {`${description}`}
            <br />
          </span>
        </li>
      )))}
    </>
  );
}
