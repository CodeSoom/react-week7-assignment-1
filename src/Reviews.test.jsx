import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders title', () => {
    const { container } = render(<Reviews reviews={[]} />);

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
      const { container } = render(<Reviews reviews={reviews} />);

      reviews.forEach(({ name, score, description }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(score);
        expect(container).toHaveTextContent(description);
      });
    });
  });

  context('without reviews', () => {
    it('renders no review message', () => {
      const { container } = render(<Reviews reviews={[]} />);

      expect(container).toHaveTextContent('리뷰가 없어요');
    });
  });
});
