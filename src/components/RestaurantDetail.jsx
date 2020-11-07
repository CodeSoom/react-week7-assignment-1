import React from 'react';

import MenuItems from './MenuItems';
import ReviewList from './ReviewList';

export default function RestaurantDetail({ restaurant }) {
  const {
    name, address, menuItems, reviews,
  } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
      <h3>평가</h3>
      <ReviewList reviews={reviews} />
    </div>
  );
}
