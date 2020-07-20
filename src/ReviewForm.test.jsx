import React from 'react';

import { useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

jest.mock('react-redux');

describe('ReviewForm', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('redners ReviewForm', () => {
    const { container } = render((
      <ReviewForm />
    ));

    expect(container).toHaveTextContent('점수');
    expect(container).toHaveTextContent('내용');
  });

  it('change input change', () => {
    const { getByLabelText } = render((
      <ReviewForm />
    ));

    fireEvent.change(getByLabelText('점수'),{
      target : { value : '5' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeReviewField',
      payload: {
        name: 'score',
        value:'5',
      },
    });
  });

  it('click postReview button', () => {
    const { getByText } = render((
      <ReviewForm />
    ));

    fireEvent.click(getByText('의견남기기'));
    expect(dispatch).toBeCalled();
  });
});
