import React from 'react';

const ReviewItem = ({ review }) => {
  const { name, score, description } = review;

  return (
    <li>
      <div>{name}</div>
      <div>{score}</div>
      <div>{description}</div>
    </li>
  );
};

export default ReviewItem;
