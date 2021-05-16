import React from 'react';

import List from './List';

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
      <List
        title="메뉴"
        list={menuItems}
      />
      <List
        title="리뷰"
        list={reviews}
      />
    </div>
  );
}
