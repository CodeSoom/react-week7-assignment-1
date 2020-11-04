import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  const renderReviewForm = () => render((
    <ReviewForm onChange={handleChange} />
  ));

  it('renders review inputs', () => {
    const { queryByLabelText } = renderReviewForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('change input value', () => {
    const reviewInput = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: 'Good!' },
    ];

    const { getByLabelText } = renderReviewForm();

    reviewInput.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
