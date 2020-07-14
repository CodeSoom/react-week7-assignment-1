import React from 'react';

import List from './List';

export default function Restaurant({ restaurant }) {
  if (!restaurant) {
    return (
      <div>
        <p>no-restaurant-info</p>
      </div>
    );
  }

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h3>{name}</h3>

      <h4>주소</h4>
      <p>{address}</p>

      <h4>메뉴</h4>
      <List items={menuItems} />
    </div>
  );
}
