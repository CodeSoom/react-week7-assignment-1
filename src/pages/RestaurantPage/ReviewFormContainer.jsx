import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../../utils/utils';

export default function ReviewFormContainer() {
  const accessToken = useSelector(get('accessToken'));

  if (!accessToken) {
    return (
      <p>로그인을 해주세요.</p>
    );
  }

  return (
    <div>
      <form>
        <label htmlFor="review-score">
          평점
        </label>
        <input
          type="number"
          id="review-score"
          name="review-score"
        />
        <label htmlFor="review-description">
          리뷰 내용
        </label>
        <input
          type="text"
          id="review-description"
          name="review-description"
        />
        <button type="submit">
          리뷰 남기기
        </button>
      </form>
    </div>
  );
}
