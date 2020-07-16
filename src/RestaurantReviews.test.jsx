import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [{
        id: 1,
        name: '테스터',
        score: '5',
        description: '맛있어요!',
      }];

      const { container } = render(
        <RestaurantReviews
          reviews={reviews}
        />,
      );

      expect(container).toHaveTextContent('리뷰');
      expect(container).toHaveTextContent(reviews[0].name);
      expect(container).toHaveTextContent(reviews[0].score);
      expect(container).toHaveTextContent(reviews[0].description);
    });
  });
});
