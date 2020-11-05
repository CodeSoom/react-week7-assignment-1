import React from 'react';

import MenuItems from './MenuItems';

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
      <ul>
        {
          reviews.map((review) => (
            <li key={review.id}>
              <p>{review.name}</p>
              <p>{review.score}</p>
              <p>{review.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
