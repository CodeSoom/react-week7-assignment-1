import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  function renderReviews(reviews) {
    return render(<Reviews reviews={reviews} />);
  }

  it('renders title', () => {
    const { container } = renderReviews([]);

    expect(container).toHaveTextContent('리뷰');
  });

  context('with reviews', () => {
    const reviews = [
      {
        id: 1,
        restaurantId: 1,
        name: '테스터',
        score: 4,
        description: 'test',
      },
      {
        id: 2,
        restaurantId: 1,
        name: '테스터',
        score: 5,
        description: '테스트',
      },
    ];

    it('renders reviews', () => {
      const { container } = renderReviews(reviews);

      reviews.forEach(({ name, score, description }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(score);
        expect(container).toHaveTextContent(description);
      });
    });
  });

  context('without reviews', () => {
    it('renders no review message', () => {
      const { container } = renderReviews([]);

      expect(container).toHaveTextContent('리뷰가 없어요');
    });
  });
});
