import React from 'react';

export default function ReviewItems({ reviewItems }) {
  if (!(reviewItems || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <ul>
      {reviewItems.reverse().map((reviewItem) => (
        <li key={reviewItem.id}>
          {reviewItem.name}
          <br />
          {reviewItem.score}
          <br />
          {reviewItem.description}
          <br />
        </li>
      ))}
    </ul>
  );
}
