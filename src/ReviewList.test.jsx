import React from 'react';

import { render } from '@testing-library/react';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  const reviews = [
    {
      id: 1,
      restaurantId: 1,
      name: '형조',
      score: 5,
      description: '훌륭하다 훌륭하다 지구인놈들',
    },
    {
      id: 3,
      restaurantId: 1,
      name: '행쥬',
      score: 3,
      description: 'Hi!',
    },
  ];

  context('with reviews', () => {
    it('render reviews', () => {
      const { container } = render((
        <ReviewList reviews={reviews} />
      ));

      reviews.forEach(({ name, score, description }) => {
        expect(container).toHaveTextContent(`${name}${score}${description}`);
      });
    });
  });
});
