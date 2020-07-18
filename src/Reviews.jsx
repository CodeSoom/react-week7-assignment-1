import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <>
      <h2>리뷰</h2>
      {!(reviews || []).length
        ? (<p>리뷰가 없어요!</p>)
        : (
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
        )}
    </>
  );
}
