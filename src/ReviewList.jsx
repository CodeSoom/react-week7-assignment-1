import React from 'react';

const ReviewList = ({ reviews }) => {
  const NO_REVIEW_TEXT = '리뷰가 존재하지 않습니다.';

  return (
    <>
      <div>리뷰</div>
      {reviews && reviews.length ? (
        <ul>
          {reviews.reverse().map(({
            id, name, score, description,
          }) => (
            <li key={id}>
              <div>{name}</div>
              <div>{score}</div>
              <div>{description}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>{NO_REVIEW_TEXT}</div>
      )}
    </>
  );
};

export default ReviewList;
