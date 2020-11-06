import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const renderReviewForm = () => render(
    <ReviewForm />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders reivew field', () => {
    const { container } = renderReviewForm();

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
  });

  it('renders register reivew button', () => {
    const { getByText } = renderReviewForm();

    expect(getByText('리뷰 남기기')).not.toBeNull();
  });
});
