import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {[...reviews].sort((a, b) => b.id - a.id).map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <div>{name}</div>
            <div>
              {score}
              점
            </div>
            <div>{description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
