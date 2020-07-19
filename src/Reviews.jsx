import React from 'react';

export default function Reviews({ reviews }) {
  const isEmpty = (arr) => arr.length === 0;

  if (isEmpty(reviews || [])) {
    return <p>리뷰가 없어요!</p>;
  }

  return (
    <>
      <h2>리뷰</h2>

      <ul>
        {[...reviews].reverse().map((review) => (
          <li key={review.id}>
            {review.name}
            <br />
            평점 :
            {' '}
            {review.score}
            <br />
            리뷰 내용 :
            {' '}
            {review.description}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}
