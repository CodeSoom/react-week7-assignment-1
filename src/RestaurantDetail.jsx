import React from 'react';

import MenuItems from './MenuItems';

import Reviews from './Reviews';

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
      <h3>리뷰</h3>
      <Reviews reviews={reviews} />
    </div>
  );
}
