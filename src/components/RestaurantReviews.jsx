import React from 'react';

export default function RestaurantRivews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p>아직 리뷰가 없어요!</p>;
  }
  return (
    <ul>
      {reviews.map((review) => {
        const {
          id, name, score, description,
        } = review;
        return (
          <li key={id}>
            <>
              {name}
              <br />
              {`${score}점`}
              <br />
              {description}
            </>
          </li>
        );
      })}
    </ul>
  );
}
