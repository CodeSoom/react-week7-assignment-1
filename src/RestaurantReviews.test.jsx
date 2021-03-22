import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  function renderRestaurantReviews(reviews) {
    return render(<RestaurantReviews reviews={reviews} />);
  }

  context('with reviews', () => {
    const reviews = [
      {
        id: 1,
        name: '테스터',
        score: '5',
        description: '맛있어요',
      },
    ];

    it('renders review list', () => {
      const { queryByText } = renderRestaurantReviews(reviews);

      expect(queryByText('테스터')).not.toBeNull();
      expect(queryByText('5점')).not.toBeNull();
      expect(queryByText('맛있어요')).not.toBeNull();
    });
  });

  context('without reviews', () => {
    const reviews = null;

    it('renders review list', () => {
      const { queryByText } = renderRestaurantReviews(reviews);

      expect(queryByText('테스터')).toBeNull();
      expect(queryByText('5점')).toBeNull();
      expect(queryByText('맛있어요')).toBeNull();
    });
  });
});
