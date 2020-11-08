import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews && reviews.length > 0 ? (
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
      ) : (
        <p>첫번째 리뷰를 남겨주세요</p>
      )}
    </>

  );
}
