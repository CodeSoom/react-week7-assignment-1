import React from 'react';

export default function RestaurantDetail({ restaurant: { reviews } }) {
  const { username, score, description } = reviews;
  return (
    <ul>
      <ol><p>테스터 5점 맛있어요</p></ol>
    </ul>
  );
}
