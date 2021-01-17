import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  function renderReviews(reviews) {
    return render(
      <Reviews reviews={reviews} />,
    );
  }

  it('renders title', () => {
    const { container } = renderReviews();

    expect(container).toHaveTextContent('리뷰');
  });

  context('with reviews', () => {
    it('renders reviews', () => {
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
    it('render no review message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = renderReviews(reviews);

        expect(container).toHaveTextContent('리뷰가 없어요!');
      });
    });
  });
});
