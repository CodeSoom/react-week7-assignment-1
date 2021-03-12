import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  const reviews = [
    {
      id: 1,
      name: '테스터',
      score: '5',
      description: '맛있어요',
    },
  ];

  it('renders review list', () => {
    const { queryByText } = render(<RestaurantReviews reviews={reviews} />);

    expect(queryByText('테스터')).not.toBeNull();
    expect(queryByText('5점')).not.toBeNull();
    expect(queryByText('맛있어요')).not.toBeNull();
  });
});
