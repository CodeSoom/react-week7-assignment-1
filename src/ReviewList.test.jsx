import React from 'react';

import { render } from '@testing-library/react';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  const renderReviewList = ({ reviews }) => render((
    <ReviewList reviews={reviews} />
  ));

  context('with reviews', () => {
    const reviews = [
      {
        id: 3, restaurantId: 1, name: '테스터', score: 3, description: 'GOOD!',
      },
      {
        id: 5, restaurantId: 1, name: '테스터', score: 3, description: 'Hi!',
      },
    ];
    it('renders title and reviews', () => {
      const { container } = renderReviewList({ reviews });

      expect(container).toHaveTextContent('리뷰');

      reviews.forEach(({ description }) => {
        expect(container).toHaveTextContent(description);
      });
    });
  });

  context('without reviews', () => {
    const reviews = [];
    const NO_REVIEW_TEXT = '리뷰가 존재하지 않습니다.';

    it('renders title and "There are no reviews." text', () => {
      const { container } = renderReviewList({ reviews });

      expect(container).toHaveTextContent('리뷰');
      expect(container).toHaveTextContent(NO_REVIEW_TEXT);
    });
  });
});
