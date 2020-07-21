import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

const handleChange = jest.fn();
const handleClick = jest.fn();

function renderReviewForm({ score, description } = {}) {
  return render((
    <ReviewForm
      fields={{ score, description }}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));
}

describe('ReviewForm', () => {
  it('redners ReviewForm', () => {
    const { container } = renderReviewForm();

    expect(container).toHaveTextContent('점수');
    expect(container).toHaveTextContent('내용');
  });

  it('change input change', () => {
    const { getByLabelText } = renderReviewForm();

    fireEvent.change(getByLabelText('점수'), {
      target: { value: '5' },
    });

    // expect(dispatch).toBeCalledWith({
    //   type: 'changeReviewField',
    //   payload: {
    //     name: 'score',
    //     value:'5',
    //   },
    // });
    expect(handleChange).toBeCalled();
  });

  it('click postReview button', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('의견남기기'));
    expect(handleClick).toBeCalled();
  });
});
