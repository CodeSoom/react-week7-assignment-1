import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  context('with reviews', () => {
    const reviews = [
      {
        id: 1,
        restaurantId: 1,
        name: '테스터',
        score: '5',
        description: 'test',
      },
    ];

    it('renders reviews', () => {
      const { container } = render((
        <RestaurantReviews
          reviews={reviews}
        />
      ));

      expect(container).toHaveTextContent(/테스터/);
      expect(container).toHaveTextContent(/5/);
      expect(container).toHaveTextContent(/test/);
    });
  });

  context('without reviews', () => {
    it('renders message', () => {
      const { container } = render((
        <RestaurantReviews />
      ));

      expect(container).toHaveTextContent('아직 작성된 리뷰가 없습니다.');
    });
  });
});
