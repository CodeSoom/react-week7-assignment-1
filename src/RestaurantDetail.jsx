import React from 'react';

import MenuItems from './MenuItems';

import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

export default function RestaurantDetail({ restaurant }) {
  const {
    id, name, address, menuItems, reviews,
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
      <h3>리뷰 남기기</h3>
      <ReviewForm id={id} />
      <h3>리뷰 내용</h3>
      <Reviews reviews={reviews} />
    </div>
  );
}
