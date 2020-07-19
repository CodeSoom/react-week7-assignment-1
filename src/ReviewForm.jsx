import React from 'react';

import { useDispatch } from 'react-redux';

import {
  changeReviewField,
  sendReview,
} from './actions';

export default function ReviewForm({ id }) {
  const dispatch = useDispatch();

  function handleChange(event) {
    const { target: { name, value } } = event;
    dispatch(changeReviewField({ name, value }));
  }

  function handleClick() {
    dispatch(sendReview({ id }));
  }

  return (
    <>
      <div>
        <label htmlFor="score">점수</label>
        <input 
          id="input-score"
          name="score"
          type="number"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">내용</label>
        <input 
          id="description-score"
          name="description"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
      >
        의견남기기
      </button>
    </>
  );
}