import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChangeReviewField = jest.fn();
  const handleSubmitReviewField = jest.fn();

  const reviewField = {
    score: '',
    description: '',
  };

  it('renders ReviewForm', () => {
    const { getByLabelText, getByRole } = render(
      <ReviewForm
        reviewField={reviewField}
        accessToken="ACCESS_TOKEN"
        onChangeReviewField={handleChangeReviewField}
        onSubmitReviewField={handleSubmitReviewField}
      />,
    );

    expect(getByLabelText('평점')).toHaveAttribute('type', 'number');
    expect(getByLabelText('내용')).toHaveAttribute('type', 'text');

    expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
  });
});
