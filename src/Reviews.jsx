import React from 'react';

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return (
      <p>
        등록된 리뷰가 없습니다!
      </p>
    );
  }

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <div>
              작성자:
              {' '}
              {name}
            </div>
            <div>
              평점:
              {' '}
              {score}
            </div>
            <div>
              리뷰 내용:
              {' '}
              {description}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
