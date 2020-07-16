import React from 'react';

export default function Reviews({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <>
        <h3>리뷰</h3>
        <p>리뷰가 없어요ㅜ</p>
      </>
    );
  }

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{`리뷰어: ${review.name}`}</p>
            <p>{`점수: ${review.score}`}</p>
            <p>{`설명: ${review.description}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
