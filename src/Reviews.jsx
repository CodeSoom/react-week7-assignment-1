import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map(({ name, score, description }) => (
          <li>
            {name}
            {' '}
            <br />
            {' '}
            {score}
            점
            <br />
            {' '}
            {description}
          </li>
        ))}
      </ul>
    </>
  );
}
