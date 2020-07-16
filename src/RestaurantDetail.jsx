import React from 'react';

import MenuItems from './MenuItems';
import ReviewItems from './ReviewItems';

export default function RestaurantDetail({
  restaurant, reviewField, onChangeReviewField, onSubmitReviewField,
}) {
  const {
    name, address, menuItems, reviews,
  } = restaurant;

  const {
    score, description,
  } = reviewField;

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
        <div>
          <div>
            <label htmlFor="review-score">평점</label>
            <input
              type="number"
              id="review-score"
              onChange={onChangeReviewField}
              name="number"
              value={score}
            />
          </div>
          <div>
            <label htmlFor="review-description">내용</label>
            <input
              type="text"
              id="review-description"
              onChange={onChangeReviewField}
              name="text"
              value={description}
            />
          </div>
          <button type="button" onClick={onSubmitReviewField}>
            리뷰 남기기
          </button>
        </div>
      </div>
      <div>
        <h3>리뷰 목록</h3>
        <ReviewItems reviewItems={reviews} />
      </div>
    </>
  );
}
