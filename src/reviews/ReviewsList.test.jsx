import React from 'react';

import { render } from '@testing-library/react';

import ReviewsList from './ReviewsList';

describe('ReviewsList', () => {
  function renderReviews(reviews) {
    return render((
      <ReviewsList reviews={reviews} />
    ));
  }

  it('shows title', () => {
    const { container } = renderReviews();

    expect(container).toHaveTextContent('Review');
  });

  context('with reviews list', () => {
    it('shows reviews', () => {
      const reviews = [
        {
          id: 2,
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        },
        {
          id: 5,
          name: '테스터',
          score: 3,
          description: '맛있네요!',
        },
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
    it('notices empty review message', () => {
      const { container } = renderReviews('');

      expect(container).toHaveTextContent('리뷰가 없습니다!');
    });
  });
});
