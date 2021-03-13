import React from 'react';

import { render, screen } from '@testing-library/react';

import Review from './Review';

describe('Review', () => {
  const reviews = [{
    id: 1,
    restaurantId: 1,
    name: '테스터',
    score: 5,
    description: '훌륭하다 훌륭하다 지구인놈들',
  }];

  const renderReviewForm = () => render((
    <Review
      reviews={reviews}
    />
  ));

  it('renders review', () => {
    renderReviewForm();

    expect(screen.getByText('테스터')).toBeInTheDocument();
  });
});
