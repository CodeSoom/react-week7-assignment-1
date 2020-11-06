import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.length || <p>리뷰가 없어요!</p>}
      <ul>
        {
          reviews.map(({
            id, name, score, description,
          }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{score}</p>
              <p>{description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
