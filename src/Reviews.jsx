import React from 'react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: '테스터',
      score: 3,
      description: '오오',
    },
    {
      id: 2,
      name: '유저',
      score: 5,
      description: '우와와',
    },
  ];

  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.name}
            {review.score}
            점
            {review.description}
          </li>
        ))}
      </ul>
    </>
  );
}
