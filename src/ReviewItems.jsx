import React from 'react';

export default function ReviewItems({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>등록된 리뷰가 없습니다.</p>
    );
  }

  return (
    <ul>
      { reviews.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          <p>
            작성자:
            {' '}
            {name}
          </p>
          <p>
            평점:
            {' '}
            {score}
          </p>
          <p>
            리뷰 내용:
            {' '}
            {description}
          </p>
        </li>
      ))}
    </ul>
  );
}
