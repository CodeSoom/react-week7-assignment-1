import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChangeReviewFields = jest.fn();
  const handleSubmit = jest.fn();

  function renderReviewForm(reviewfields) {
    return render(
      <ReviewForm
        reviewfields={reviewfields}
        onChange={handleChangeReviewFields}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('renders review write form', () => {
    const { queryByLabelText, queryByText } = renderReviewForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();

    expect(queryByText('리뷰 남기기')).not.toBeNull();
  });

  it('listens change events', () => {
    const reviewfields = {
      score: '5',
      description: 'description',
    };
    const { getByLabelText } = renderReviewForm(reviewfields);

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: 'newDescription' },
    ];

    controls.forEach((control) => {
      const { label, value } = control;

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChangeReviewFields).toBeCalledTimes(2);
    });
  });

  it('listens click event', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
