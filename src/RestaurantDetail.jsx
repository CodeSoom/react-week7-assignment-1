import React from 'react';

import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

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
      <ul>
        <li>
          <p>테스터</p>
          <p>5점</p>
          <p>맛있어요!</p>
        </li>
      </ul>
    </div>
  );
}
