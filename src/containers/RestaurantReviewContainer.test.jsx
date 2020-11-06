import React from 'react';
import { render, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';
import RestaurantReviewContainer from './RestaurantReviewContainer';

describe('RestaurantReviewContainer', () => {
  it('renders component', () => {
    useSelector.mockImplementation((selector) => selector({
      review: 'review',
    }));

    render(<RestaurantReviewContainer />);

    expect(screen.getByDisplayValue('review')).toBeInTheDocument();
  });
});
