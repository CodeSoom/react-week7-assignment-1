import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  function renderReviews(reviews) {
    return render(
      <Reviews reviews={reviews} />,
    );
  }

  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        { id: 1, name: '테스터', score: 5, description: '맛나다' },
        { id: 2, name: '테스터', score: 3, description: '그저그래' },
      ];

      const { container } = renderReviews(reviews);

      reviews.forEach(({ name, score, description }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(score);
        expect(container).toHaveTextContent(description);
      });
    });
  });

  context('without reviews', () => {
    it('render no review message', () => {
      const { container } = renderReviews([]);

      expect(container).toHaveTextContent('리뷰가 없어요!');
    });
  });
});