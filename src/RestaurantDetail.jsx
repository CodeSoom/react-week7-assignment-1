import React from 'react';

import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const {
    name, address, menuItems, reviews,
  } = restaurant;

  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>
          주소:
          {' '}
          {address}
        </p>
        <h3>메뉴</h3>
        <MenuItems menuItems={menuItems} />
      </div>
      <div>
        <h3>리뷰 작성</h3>
      </div>
      <div>
        <h3>리뷰 목록</h3>
        <ul>
          {reviews.length !== 0 ? (
            reviews.map((review) => (
              <li key={review.id}>
                <h4>
                  리뷰어 :
                  {review.name}
                </h4>
                <h4>
                  평점 :
                  {review.score}
                  {' '}
                  점
                </h4>
                <h4>
                  내용 :
                  {review.description}
                </h4>
              </li>
            ))
          ) : (
            <p>리뷰가 없습니다</p>
          )}
        </ul>
      </div>
    </>
  );
}
