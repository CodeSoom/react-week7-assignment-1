import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from '@components/ReviewForm';

describe('ReviewForm', () => {
  it('renders input fields and button', () => {
    const { getByLabelText, getByRole } = render(<ReviewForm />);

    const scoreInput = getByLabelText('평점');
    const reviewInput = getByLabelText('리뷰');

    expect(scoreInput).toHaveAttribute('name', 'score');
    expect(reviewInput).toHaveAttribute('name', 'review');

    expect(scoreInput).toHaveAttribute('type', 'number');
    expect(reviewInput).toHaveAttribute('type', 'text');

    expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
  });
});
