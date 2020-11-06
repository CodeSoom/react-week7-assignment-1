import React from 'react';

export default function RestaurantReview({ review, onChange, onClick }) {
  return (
    <form>
      <input
        type="text"
        placeholder="리뷰를 작성해 주세요!"
        value={review}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onClick}
        disabled={!review}
      >
        작성하기
      </button>
    </form>
  );
}
