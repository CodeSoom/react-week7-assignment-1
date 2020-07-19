import React from 'react';

export default function ReviewItems({ reviewItems }) {
  if (!(reviewItems || []).length) {
    return (
      <p>리뷰가 없어요</p>
    );
  }

  return (
    <ul>
      {reviewItems.map((reviewItem) => (
        <li key={reviewItem.id}>
          <h4>
            리뷰어 :
            {reviewItem.name}
          </h4>
          <h4>
            평점 :
            {reviewItem.score}
            {' '}
            점
          </h4>
          <h4>
            내용 :
            {reviewItem.description}
          </h4>
        </li>
      ))}
    </ul>
  );
}
