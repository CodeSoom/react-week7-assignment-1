import React from 'react';

import MenuItems from './MenuItems';

import Reviews from './Reviews';

function ReviewItem() {
  return (
    <p>리뷰작성</p>
  );
}

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
      <h3>리뷰 남기기</h3>
      <ReviewItem />
      <h3>리뷰 내용</h3>
      <Reviews reviews={reviews} />
    </div>
  );
}
