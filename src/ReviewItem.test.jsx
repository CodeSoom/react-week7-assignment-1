import React from 'react';

import { render } from '@testing-library/react';

import ReviewItem from './ReviewItem';

describe('ReviewItem', () => {
  const renderReviewItem = ({ review }) => render((
    <ReviewItem review={review} />
  ));

  const review = {
    id: 3,
    restaurantId: 1,
    name: '테스터',
    score: 3,
    description: 'GOOD!',
  };

  it('renders review', () => {
    const { container } = renderReviewItem({ review });

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('3');
    expect(container).toHaveTextContent('GOOD!');
  });
});
