import React from 'react';

import MenuItems from './MenuItems';
import RestaurantReviews from './RestaurantReviews';
import RestaurantReviewForm from './RestaurantReviewForm';

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
      <RestaurantReviewForm />
      <h3>리뷰</h3>
      <RestaurantReviews reviews={reviews} />
    </div>
  );
}
