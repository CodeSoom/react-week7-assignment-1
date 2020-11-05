import React from 'react';

export default function Reviews({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>첫번째 리뷰를 남겨주세요</p>
    );
  }

  return (
    <ul>
      {reviews.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          <div>
            {name}
          </div>
          <div>
            {score}
            점
          </div>
          <div>
            {description}
          </div>
        </li>
      ))}
    </ul>
  );
}
