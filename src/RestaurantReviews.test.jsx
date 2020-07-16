import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  function renderRestaurantReviews(reviews) {
    return (
      render(
        <RestaurantReviews
          reviews={reviews}
        />,
      )
    );
  }

  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [{
        id: 1,
        name: '테스터',
        score: '5',
        description: '맛있어요!',
      }];

      const { container } = renderRestaurantReviews(reviews);

      expect(container).toHaveTextContent('리뷰');
      expect(container).toHaveTextContent(reviews[0].name);
      expect(container).toHaveTextContent(reviews[0].score);
      expect(container).toHaveTextContent(reviews[0].description);
    });
  });

  context('without reviews', () => {
    it('renders no review message', () => {
      const reviews = [];

      const { container } = renderRestaurantReviews(reviews);

      expect(container).toHaveTextContent('리뷰가 없습니다.');
    });
  });

  context('with null', () => {
    it('renders no review message', () => {
      const reviews = null;

      const { container } = renderRestaurantReviews(reviews);

      expect(container).toHaveTextContent('리뷰가 없습니다.');
    });
  });
});
