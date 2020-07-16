import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const reviewFields = {
    score: '',
    description: '',
  };
  const handleChange = jest.fn();

  function renderReviewForm() {
    return render(
      <ReviewForm reviewFields={reviewFields} onChange={handleChange} />,
    );
  }

  it('renders the review fields', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });
});
