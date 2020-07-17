import React from 'react';

import { useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('listens the review fields change event', () => {
    const { getByLabelText } = render((
      <ReviewFormContainer />
    ));

    fireEvent.change(getByLabelText('평점'), {
      target: { value: '5' },
    });
    expect(dispatch).toBeCalledWith({
      type: 'changeReviewFields',
      payload: {
        name: 'score',
        value: '5',
      },
    });
  });
});
