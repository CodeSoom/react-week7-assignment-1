import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  context('when reviews array is not empty', () => {
    it('renders reviews', () => {
      const reviews = [
        {
          id: 1,
          restaurantId: 1,
          name: '쩝쩝박사',
          score: 5,
          description: '좋아요',
        },
      ];
      const { container } = render(<RestaurantReviews reviews={reviews} />);

      expect(container).toHaveTextContent('쩝쩝박사');
      expect(container).toHaveTextContent('5점');
      expect(container).toHaveTextContent('좋아');
    });
  });

  context('when reviews array is empty', () => {
    it('renders no reviews message', () => {
      const reviews = [];
      const { container } = render(<RestaurantReviews reviews={reviews} />);
      expect(container).toHaveTextContent('리뷰가 없어요');
    });
  });
});
