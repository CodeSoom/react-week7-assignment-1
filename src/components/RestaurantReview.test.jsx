import React from 'react';
import { render, screen } from '@testing-library/react';

import RestaurantReview from './RestaurantReview';

describe('RestaurantReview', () => {
  const renderRestaurantReview = () => render(<RestaurantReview />);

  it('renders input and button', () => {
    renderRestaurantReview();

    expect(screen.getByPlaceholderText('리뷰를 작성해 주세요!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '작성하기' })).toBeInTheDocument();
  });
});
