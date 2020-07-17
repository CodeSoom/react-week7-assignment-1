import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    reviewFields: {
      score: '',
      description: '',
    },
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('listens the review fields change event', () => {
    const { getByLabelText } = render((
      <ReviewFormContainer />
    ));

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '끼요옷' },
    ];
    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });
      expect(dispatch).toBeCalledWith({
        type: 'changeReviewFields',
        payload: { name, value },
      });
    });
  });
});
