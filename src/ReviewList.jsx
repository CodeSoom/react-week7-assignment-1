import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => {
  const NO_REVIEW_TEXT = '리뷰가 존재하지 않습니다.';

  return (
    <>
      <div>리뷰</div>
      {reviews && reviews.length ? (
        <ul>
          {reviews.reverse().map((review) => (
            <ReviewItem
              key={review.id}
              review={review}
            />
          ))}
        </ul>
      ) : (
        <div>{NO_REVIEW_TEXT}</div>
      )}
    </>
  );
};

export default ReviewList;
