import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        {
          id: 1, restaurantId: 1, name: '손님', score: 3, description: '그저 그래요.',
        },
        {
          id: 2, restaurantId: 1, name: '주방장', score: 5, description: '정말 맛있어요.',
        },
      ];
      const { container } = render(<RestaurantReviews reviews={reviews} />);

      expect(container).toHaveTextContent('손님');
      expect(container).toHaveTextContent('3점');
      expect(container).toHaveTextContent('그저 그래요');
    });
  });

  context('without reviews', () => {
    it('renders no reviews message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<RestaurantReviews reviews={reviews} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
