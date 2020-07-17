import React from 'react';

import List from './List';
import ReviewList from './ReviewList';

export default function Restaurant({ restaurant }) {
  if (!restaurant) {
    return (
      <div>
        <p>no-restaurant-info</p>
      </div>
    );
  }

  const {
    name, address, menuItems, reviews,
  } = restaurant;

  return (
    <div>
      <h3>{name}</h3>

      <h4>주소</h4>
      <p>{address}</p>

      <h4>메뉴</h4>
      <List items={menuItems} />

      <h4>리뷰</h4>
      <ReviewList items={reviews} />
    </div>
  );
}
