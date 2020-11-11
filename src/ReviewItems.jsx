import React from 'react';

export default function ReviewItems({ reviewItems }) {
  if (!(reviewItems || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviewItems.map((reviewItem) => (
          <li key={reviewItem.id}>
            <p>{reviewItem.name}</p>
            <p>
              {reviewItem.score}
              점
            </p>
            <p>{reviewItem.description}</p>
          </li>
        ))}
      </ul>
    </>

  );
}
